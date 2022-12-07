<script>
import AppProducts from './AppProducts.vue'
import AppEvents from './AppEvents.vue'
import AppShop from './AppShop.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    AppProducts,
    AppEvents,
    AppShop,
  }
}
</script>

<template>
<main>
  <AppProducts/>
  <AppEvents/>
  <AppShop/>

</main>
</template>

<style lang="scss" scoped>

</style>