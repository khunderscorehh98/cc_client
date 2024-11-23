<template>
    <div>
      <!-- Floating Install App Button visible on mobile devices (Android or iOS) -->
      <v-btn
        v-if="isMobile"
        fab
        fixed
        bottom
        right
        color="primary"
        @click="handleInstallAction"
        class="install-btn"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
  
      <!-- iOS Snackbar for "Add to Home Screen" message (visible only on iOS) -->
      <div v-if="showSnackbar" id="snackbar" class="mdc-snackbar">
        <div class="mdc-snackbar__text">
          To install, tap "Add to Home Screen" from your browser's menu.
        </div>
        <div class="mdc-snackbar__action-wrapper">
          <button
            class="mdc-snackbar__action mdc-button mdc-button--raised"
            @click="closeSnackbar"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { MDCSnackbar } from '@material/snackbar';
  
  export default {
    data() {
      return {
        deferredPrompt: null, // Stores the beforeinstallprompt event for Android
        showSnackbar: false, // Controls visibility of the snackbar for iOS
      };
    },
    computed: {
      // Check if the user is on a mobile device (screen size sm and below)
      isMobile() {
        console.log("isMobile: ", this.$vuetify.breakpoint.smAndDown); // Debug log for mobile detection
        return this.$vuetify.breakpoint.smAndDown; // This should be true on mobile or smaller devices
      },
      // Check if the user is on Android
      isAndroid() {
        const isAndroidDevice = /android/i.test(navigator.userAgent.toLowerCase());
        console.log("isAndroid:", isAndroidDevice); // Debug log for Android detection
        return isAndroidDevice;
      },
      // Check if the user is on iOS
      isIos() {
        const userAgent = navigator.userAgent.toLowerCase();
        console.log("User Agent:", userAgent); // Debug log for user agent
        const isIosDevice = /iphone|ipod|ipad/i.test(userAgent);
        console.log("isIos:", isIosDevice); // Debug log for iOS detection
        return isIosDevice;
      },
    },
    mounted() {
      // Listen for the beforeinstallprompt event for PWA install prompt on Android
      window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
  
      // Force display of the button temporarily on all devices for debugging purposes
      setTimeout(() => {
        console.log("isMobile:", this.isMobile); // Debugging output
        console.log("isIos:", this.isIos); // Debugging output
        console.log("isAndroid:", this.isAndroid); // Debugging output
      }, 500);
    },
    methods: {
      // Handle the install action when the button is clicked
      handleInstallAction() {
        if (this.isIos()) {
          // iOS: Show the snackbar
          this.showSnackbar = true;
          this.showIosSnackbar();
        } else if (this.isAndroid()) {
          // Android: Show the PWA install prompt
          this.showAndroidInstallPrompt();
        }
      },
  
      // Show iOS snackbar to instruct user to "Add to Home Screen"
      showIosSnackbar() {
        const snackbarElement = document.querySelector('.mdc-snackbar');
        const snackbar = new MDCSnackbar(snackbarElement);
        snackbar.open();
        setTimeout(() => {
          snackbar.close(); // Close after 10 seconds
          this.showSnackbar = false;
        }, 10000); // Close after 10 seconds
      },
  
      // Handle the beforeinstallprompt event to save the prompt for later use (Android)
      handleBeforeInstallPrompt(event) {
        event.preventDefault(); // Prevent default browser install prompt
        this.deferredPrompt = event; // Store the event for later use
      },
  
      // Show Android PWA install prompt
      showAndroidInstallPrompt() {
        if (this.deferredPrompt) {
          this.deferredPrompt.prompt();
          this.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
            this.deferredPrompt = null; // Reset after user response
          });
        }
      },
  
      // Close the snackbar when the user clicks "Close"
      closeSnackbar() {
        this.showSnackbar = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Floating Install Button styles */
  .install-btn {
    margin-bottom: 80px; /* Add space to avoid overlap with bottom navigation */
  }
  
  .v-btn {
    z-index: 100; /* Ensure the button stays on top */
  }
  
  /* Custom Styles for Material Snackbar */
  .mdc-snackbar {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 101;
    display: none;
    width: 100%;
  }
  
  .mdc-snackbar--open {
    display: block;
  }
  
  .mdc-snackbar__text {
    padding: 12px;
    color: white;
  }
  
  .mdc-snackbar__action-wrapper {
    padding: 8px;
  }
  
  .mdc-snackbar__action {
    color: #ffffff;
    background-color: #1976d2;
    border: none;
  }
  </style>
  