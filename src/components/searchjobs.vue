<template>
    <div>
        <v-card>
            <v-container>
                <!-- Job Search Bar -->
                <v-text-field outlined label="Job Search..." @click:append="searchJobs"
                    append-icon="mdi-magnify"></v-text-field>

                <!-- Loop through job items and display each one -->
                <div v-for="(job, index) in jobs" :key="index">
                    <v-card class="mt-3">
                        <v-container>
                            <!-- Job Title and Description -->
                            <v-row>
                                <v-col :cols="12" :md="4">
                                    <strong class="text-h4">{{ job.title }}</strong>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col :cols="12" :md="8">
                                    <em>{{ job.desc }}</em>
                                </v-col>
                                <v-col :cols="12" :md="4" class="d-flex justify-end align-center">
                                    <v-btn @click="applyJob(job)">Apply</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </div>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    title: 'Software Engineer',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum accusamus qui mollitia soluta quis ad tenetur cum doloribus voluptatem beatae, libero culpa distinctio modi tempore molestias provident dolor reprehenderit!'
                },
                {
                    title: 'UI/UX Designer',
                    desc: 'Consectetur adipisicing elit. Amet, expedita doloribus quia commodi corporis aliquid quod magnam veniam eaque, suscipit similique, accusantium dolore doloremque.'
                },
                {
                    title: 'Data Scientist',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit velit felis, sed feugiat elit viverra non.'
                },
                {
                    title: 'Product Manager',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper tempor risus, ac cursus mi facilisis.'
                }
            ]
        }
    },
    methods: {
        searchJobs() {
            console.log('Search');
            // Implement search functionality if needed
        },
        applyJob(job) {
            console.log(`Applied to ${job.title}`);
            // Implement apply functionality (e.g., open a form, or show a success message)
        }
    }
}
</script>

<style lang="scss" scoped>
/* Additional styles can be added here */
.v-row {
    margin-bottom: 16px; /* Optional: Space between rows */
}
</style>
