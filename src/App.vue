<template>
  <div>
    <v-app>
      <!-- App Bar -->
      <v-app-bar app color="primary" dark>
        <div>
          Welcome to the Dashboard
        </div>

        <v-spacer></v-spacer>

        <v-btn @click="logoutButton">
          Logout
        </v-btn>
      </v-app-bar>

      <!-- Main content area -->
      <v-main>
        <v-container fluid>
          <!-- Sidebar component -->
          <sidebar />
          
          <!-- Dynamic routed views -->
          <router-view />
        </v-container>
      </v-main>

      <!-- Use custom footer component here -->
      <footer />
    </v-app>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue';
import footer from './components/footer.vue'; // Importing custom footer component

export default {
  name: 'App',
  components: {
    sidebar,
    footer // Registering the custom footer component
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
