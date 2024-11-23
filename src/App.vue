<template>
  <div>
    <v-app>
      <!-- App Bar -->
      <v-app-bar app color="primary" dark>
        <div>
          Career Connect
        </div>

        <v-spacer></v-spacer>

        <v-btn @click="logoutButton">
          Logout
        </v-btn>
      </v-app-bar>

      <!-- Main content area -->
      <v-main>
        <v-container fluid>
          <!-- Sidebar component (only for larger screens) -->
          <sidebar v-if="$vuetify.breakpoint.lgAndUp" />

          <!-- Dynamic routed views -->
          <router-view />

          <!-- Bottom Navigation (only for mobile) -->
          <bottom-navigation v-if="$vuetify.breakpoint.smAndDown" />
        </v-container>
      </v-main>

      <!-- Custom Footer -->
      <footer />

      <!-- InstallButton Component (Handles Install Button and Prompt) -->
      <installbutton />
    </v-app>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue';
import bottomNavigation from './components/bottomnavigation.vue'; // Importing the bottom navigation component
import footer from './components/footer.vue'; // Importing custom footer component
import InstallButton from './components/installbutton.vue'; // Import the correct InstallButton component

export default {
  name: 'App',
  components: {
    sidebar,
    bottomNavigation, // Registering the bottom navigation component
    footer, // Registering the custom footer component
    InstallButton, // Register InstallButton component
  },
  methods: {
    logoutButton() {
      console.log('Logout');
    }
  }
};
</script>

<style scoped>
/* Optional: Additional styles for your layout */
</style>
