<template>
    <div>
      <v-card>
        <v-container>
          <!-- Uploaded Documents Title -->
          <em class="gray-text">Uploaded Documents:</em>
  
          <!-- Loop through each document type and display its status -->
          <v-list>
            <v-list-item v-for="(document, index) in documents" :key="index">
              <v-list-item-content>
                <v-list-item-title>
                  {{ document.name }} -
                  <span :class="{ 'text-success': document.uploadProgress === 100, 'text-danger': document.uploadProgress < 100 }">
                    {{ document.uploadProgress === 100 ? 'Completed' : 'Not Completed' }}
                  </span>
                </v-list-item-title>
                <!-- Dynamic Progress Bar -->
                <v-progress-linear
                  :value="document.uploadProgress"
                  striped
                  color="blue"
                  height="10"
                >
                  <template v-slot:default>
                    {{ document.uploadProgress }}%
                  </template>
                </v-progress-linear>
              </v-list-item-content>
            </v-list-item>
          </v-list>
  
          <!-- Edit Button -->
          <v-row>
            <v-col :cols="12" class="d-flex justify-center justify-md-end">
              <v-btn @click="applyJob" class="mt-3">Edit</v-btn> <!-- Button is centered on small screens and aligned to the right on large screens -->
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        documents: [
          { name: 'Personal Document', uploadProgress: 20 },
          { name: 'Academic Document', uploadProgress: 90 },
          { name: 'Health Document', uploadProgress: 50 },
          { name: 'Identification Document', uploadProgress: 100 },
        ],
      };
    },
    methods: {
      // Example method to simulate progress updates
      applyJob() {
        console.log('Edit button clicked');
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .gray-text {
    color: gray;
  }
  
  .text-success {
    color: green;
  }
  
  .text-danger {
    color: red;
  }
  
  .v-btn {
    width: auto;
    /* You can adjust the button width if needed */
  }
  </style>
  