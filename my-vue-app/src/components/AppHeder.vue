<script>
import AppNav from './AppNav.vue';
import AppText from './AppText.vue'

export default {
    data () {
        return {

        }
    },
 conponents: {
    AppNav,
    AppText,
 }
}
</script>

<template>
    <header>
        <div>
            <img src="../assets/avada-bakery-logo.png" alt="">
            <AppNav/>
        </div>
        
        <AppText/>
    </header>

</template>

<style scoped>
img{
    padding-top: 20px;
    padding-left: 35px;
}

</style>


<!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" />
<font-awesome-icon icon="fa-solid fa-chevron-right" />
<font-awesome-icon icon="fa-solid fa-chevron-left" /> -->