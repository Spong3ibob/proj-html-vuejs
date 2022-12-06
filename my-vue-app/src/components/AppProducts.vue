<script>
import AppText from './AppText.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    AppText,
  }
}
</script>

<template>
  <section class="section-products">
    <AppText/>
    <div class="carosel">
      <img src="../assets/choco-chip-cookies.jpg" alt="">
      <img src="../assets/strawberry-jam-cookies.jpg" alt="">
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="arrow-right"/>
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="arrow-left"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-products{
  width: 100%;
  padding-top: 180px;
  display: flex;
  justify-content: space-around;
}
.carosel{
  position: relative;
  img{
    height: 675px;
    width: 530px;
  }
}
.container-text{
  width: 500px;
}
.arrow-right{
  top: 300px;
  right: 0;
}
.arrow-left{
  top: 300px;
  left: 0;
}
</style>