<template>
    <div>
      <v-container>
        <v-row>
          <!-- Loop through the items array to render each component dynamically -->
          <v-col
            v-for="(item, index) in items"
            :key="index"
            :cols="12"           
            :sm="6"              
            :md="4"              
            :lg="3"              
          >
            <component :is="item.component" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import notification from '@/components/notification.vue';
  import news from '@/components/news.vue';
  import appointment from '@/components/appointment.vue';
  import interview from '@/components/interview.vue';
  
  export default {
    components: {
      notification,
      news,
      appointment,
      interview,
    },
    data() {
      return {
        // Define an array of components to render dynamically
        items: [
          { name: 'Notification', component: 'notification' },
          { name: 'News', component: 'news' },
          { name: 'Appointment', component: 'appointment' },
          { name: 'Interview', component: 'interview' },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  