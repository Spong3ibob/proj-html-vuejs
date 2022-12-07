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
      <div class="cookies">
        <div class="price">
          <h2>Choco Chip Cookies</h2>
          <span>Cookies, Pastries</span>
          <h3>$19.00 $39.00</h3>
        </div>
        <img src="../assets/choco-chip-cookies.jpg" alt="">
      </div>
      <div class="jam-cookies">
      <!-- <img src="../assets/strawberry-jam-cookies.jpg" alt=""> -->
      </div>
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
  justify-content: space-between;
}
.carosel{
  position: relative;
  img{
    height: 675px;
    width: 530px;
  }
}
.cookies{
  height: 670px;
  width: 525px;
}
.price{
  display: none;
  width: 100%;
  height: 100%;
}
.price:hover{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50%;
  background-image: url(../assets/choco-chip-cookies.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.cookies{
  display: block;
}
.cookies:hover{
  display: none;
}
h2{
  color: var(--primary-color);
}
span{
  color: var(--primary-color);
  padding-top: 10px;
}
h3{
  color: var(--primary-color);
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  padding-top: 20px;
}

.container-text{
  width: 500px;
}
.arrow-right{
  top: 300px;
  right: 0px;
}
.arrow-left{
  top: 300px;
  left: 20px;
}
</style>