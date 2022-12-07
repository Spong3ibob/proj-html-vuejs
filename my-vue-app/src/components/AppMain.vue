<script>
import AppProducts from './AppProducts.vue'
import AppEvents from './AppEvents.vue'
import AppShop from './AppShop.vue'
import AppProcess from './AppProcess.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    AppProducts,
    AppEvents,
    AppShop,
    AppProcess,
  }
}
</script>

<template>
<main>
  <AppProducts/>
  <AppEvents/>
  <AppShop/>
  <AppProcess/>
</main>
</template>

<style lang="scss" scoped>

</style>