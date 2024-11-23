<template>
    <div>
      <v-container>
        <!-- First Row: Profile Image and Document Progress -->
        <v-row>
          <v-col :cols="12" :md="4" class="mb-4">
            <imageprofile />
          </v-col>
          <v-col :cols="12" :md="8" class="mb-4">
            <documentprogress />
          </v-col>
        </v-row>
  
        <!-- Second Row: Job Search -->
        <v-row>
          <v-col :cols="12">
            <searchjobs />
          </v-col>
        </v-row>
  
        <!-- Third Row: Calendar -->
        <v-row>
          <v-col :cols="12">
            <calendar />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import imageprofile from '@/components/imageprofile.vue';
  import documentprogress from '@/components/documentprogress.vue';
  import searchjobs from '@/components/searchjobs.vue';
  import calendar from '@/components/calendar.vue';
  
  export default {
    components: {
      imageprofile,
      documentprogress,
      searchjobs,
      calendar
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Optional: Add spacing or other custom styles here */
  .v-row {
    margin-bottom: 16px;
  }
  </style>
  