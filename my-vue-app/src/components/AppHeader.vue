<script>
import AppNav from './AppNav.vue';
import AppText from './AppText.vue'

export default {
    data () {
        return {
            navheaders:[
                'HOME',
                'SHOP',
                'ABOUT',
                'GALLERY',
                'LOCATIONS',
                'JOURNAL',
                'CONTACT',
                'MY ACCOUNT',
                '<font-awesome-icon icon="fa-solid fa-cart-shopping" />'
            ]
        }
    },
 components: {
    AppNav,
    AppText,
 }
}
</script>

<template>
    <header>
        <div class="container-nav">
            <img src="../assets/avada-bakery-logo.png" alt="">
            <AppNav 
            v-for="navheader in navheaders"
            :info="navheader"
            />
        </div>
        
        <AppText/>
    </header>

</template>

<style lang="scss">
.container-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
img{
    padding-top: 20px;
    padding-left: 35px;
}

</style>


