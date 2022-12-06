<script>
import AppNav from './AppNav.vue'
export default {
  data() {
    return {
      navfooters:[
      'Shop',
      'About',
      'Gallery',
      'Locations',
      'Journal',
      'Contact',
      'Orders',
      ]
    }
  },
  components: {
    AppNav,
  },
  
}

</script>

<template>
<footer>

  <AppNav
  v-for="navfooter in navfooters"
  :nav="navfooter"
  />
</footer>
</template>

<style lang="scss">

</style>