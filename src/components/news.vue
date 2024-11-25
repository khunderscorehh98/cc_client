<template>
    <div>
        <v-card class="full-screen-card">
            <v-container>
                <em class="grey-text">
                    News:
                </em>
                <hr>
                <br>
                <v-card>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                News Title
                            </v-col>
                        </v-row>
                        <hr>
                        <v-row>
                            <v-col>
                                <p>
                                    News Content
                                </p>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="auto">
                                <v-btn text>
                                    READ MORE
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
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

.full-screen-card {
    height: 90vh;
    /* Full viewport height */
    width: 100vw;
    /* Full viewport width */
}
</style>
