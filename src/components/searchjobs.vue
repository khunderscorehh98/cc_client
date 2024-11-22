<template>
    <div>
        <v-card>
            <v-container>
                <v-text-field outlined label="Job Search..." @click:append="searchJobs"
                    append-icon="mdi-magnify"></v-text-field>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        searchJobs() {
            console.log('Search')
        }
    }
}
</script>

<style lang="scss" scoped></style>
