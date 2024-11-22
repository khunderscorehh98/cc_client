<template>
    <div>
        <v-card>
            <v-container>
                <!-- Vuetify calendar component -->
                <v-calendar
                    v-model="selectedDate"
                    :events="events"
                    :first-day-of-week="1"
                    color="primary"
                    locale="en"
                ></v-calendar>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedDate: new Date().toISOString().substr(0, 10), // Default selected date
            events: [
                {
                    name: "Job Interview",
                    start: "2024-11-25",
                    end: "2024-11-25",
                    color: "blue"
                },
                {
                    name: "Team Meeting",
                    start: "2024-11-27",
                    end: "2024-11-27",
                    color: "green"
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
</style>
