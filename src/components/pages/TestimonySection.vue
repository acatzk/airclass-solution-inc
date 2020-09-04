<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/img/bgDownload.jpg'),
          },
          {
            src: require('@/assets/img/bgDrawer.jpg'),
          },
          {
            src: require('@/assets/img/bgHero.jpg'),
          },
          {
            src: require('@/assets/img/bghero1.jpg'),
          },
        ],
      }
    },
  }
</script>