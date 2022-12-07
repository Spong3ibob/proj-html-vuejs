<script>
import AppOrder from './AppOrder.vue'
import AppNav from './AppNav.vue'

export default {
  data() {
    return {
      navfooters:[
        {
            name:'Shop',
            val:false,
        },
        {
            name:'About',
            val:false,
        },
        {
            name:'Gallery',
            val:false,
        },
        {
            name:'Locations',
            val:false,
        },
        {
            name:'Journal',
            val:false,
        },
        {
            name:'Contact',
            val:false,
        },
        {
            name:'Orders',
            val:false,
        
        },
      ],
    }
  },
  components: {
    AppOrder,
    AppNav,
  },
  
}

</script>

<template>
  <footer>
    <AppOrder/>
    <div class="container-info">
      <div class="container-left">
        <img src="../assets/avada-bakery-logo.png" alt="">
        <ul>
          <AppNav
          v-for="navfooter in navfooters"
          :nav="navfooter"
          />
          <li><font-awesome-icon icon="fa-solid fa-cart-shopping"/><b>0</b></li>
        </ul>
        <span><font-awesome-icon icon="fa-regular fa-copyright"/> Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reversed | Power by WordPress </span>
      </div>
      <div class="conatiner-right">
        <h2>Subscribe to our Newsletter</h2>
        <div class="email">
          <input type="text" placeholder="Enter email address*"><button class="secondaryButton">Subscribe</button>
        </div>
        <div class="icons">
          <font-awesome-icon icon="fa-brands fa-instagram" class="icon"/>
          <font-awesome-icon icon="fa-brands fa-twitter" class="icon"/>
          <font-awesome-icon icon="fa-brands fa-facebook" class="icon"/>
          <font-awesome-icon icon="fa-brands fa-pinterest-p" class="icon"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.container-info{
  padding: 80px 95px;
  display: flex;
  justify-content: space-between;
}
img{
  padding-bottom: 60px;
}
ul{
  padding-bottom: 130px;
}
b{
  margin-left: 20px;
  padding: 5px 10px;
  background-color: var(--card-backgroundcolor);
  border-radius: 50%;
}

.conatiner-right{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.email{
  padding-top: 55px;
  padding-bottom: 150px;
}
input{
  height: 37px;
  width: 400px;
  border: none;
  border: 1px solid;
  border-radius: 5px;
  border-color: var(--text-special-color);
  padding-left: 15px;
  margin-right: 10px;
}
.icons{
  color: var(--text-primary-color);
  .icon{
    padding: 0 20px;
  }
}
</style>