<template>
    <div>
        <v-card>
            <v-container>
                <em class="grey-text">
                    News:
                </em>
                <v-card>
                    <v-card-title>{{ news.title }}</v-card-title>
                    <v-card-text>{{ news.content }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="showMore">{{ showMoreText }}</v-btn>
                    </v-card-actions>
                    <v-card-text v-if="showMore">{{ news.fullContent }}</v-card-text>
                </v-card>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.grey-text {
    color: grey;
}
</style>