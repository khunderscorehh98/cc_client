<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="4">
                    <imageprofile />
                </v-col>
                <v-col cols="8">
                    <documentprogress />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <searchjobs />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
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
        
    }
</script>

<style lang="scss" scoped>

</style>