<script>
import AppProducts from './AppProducts.vue'
import AppEvents from './AppEvents.vue'
import AppShop from './AppShop.vue'
import AppProcess from './AppProcess.vue'
import AppLocation from './AppLocation.vue'
import AppSharing from './AppSharing.vue'

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
    AppLocation,
    AppSharing,
  }
}
</script>

<template>
<main>
  <AppProducts/>
  <AppEvents/>
  <AppShop/>
  <AppProcess/>
  <AppLocation/>
  <AppSharing/>
</main>
</template>

<style lang="scss" scoped>

</style>