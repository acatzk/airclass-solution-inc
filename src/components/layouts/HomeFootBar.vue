<template>
  <v-footer padless>
    <v-card flat tile class="text-center" color="white">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 grey--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="grey--text pt-0">
        Learning English Language Through Video Calls. Putting Children First. Preparing children for success in life
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="grey--text">
        {{ new Date().getFullYear() }} — <strong>Airclass Solution, Inc.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "",
      },
    ],
  }),
};
</script>