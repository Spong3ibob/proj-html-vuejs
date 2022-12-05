<script>
import AppHeder from './components/AppHeder.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'



export default {
  components: {
    AppHeder,
    AppMain,
    AppFooter,

  }
}
</script>

<template>
  <AppHeder/>
  <AppMain/>
  <AppFooter/>

</template>

<style lang='scss'>
@import '../global.scss';
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap'); 

</style>
