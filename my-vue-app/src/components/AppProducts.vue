<script>
import AppText from './AppText.vue'

export default {
  data() {
    return {
      textproducts:[
        {
            pretitle : 'OUR PRODUCTS',
            descrition : 'All our delectable pastries are backed fresh in our kitchen very morning, and are made whit all-natural, all organic ingredients.',
            button : 'Start Shopping',
            primary:false,
            secondary:true,
        },
      ]
    }
  },
  components: {
    AppText,
  }
}
</script>

<template>
  <section class="section-products">
    <AppText
    v-for="textproduct in textproducts"
    :text="textproduct"
    />
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