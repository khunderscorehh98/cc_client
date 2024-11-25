<template>
  <div>
    <v-card class="full-screen-card d-flex flex-column">
      <v-container>
        <em class="grey-text">
          Notifications:
        </em>
        <hr>
        <br>
        <v-card>
          <v-container>
            <v-row>
              <v-col>
                Notification sample
              </v-col>
            </v-row>
            <hr>
            <v-row>
              <v-col>
                Notification Description
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto">
                <v-btn
                  text
                >
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.full-screen-card {
  height: 90vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
}
.grey-text {
  color: grey;
}
</style>
