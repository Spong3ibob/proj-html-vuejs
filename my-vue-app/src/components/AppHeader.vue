<script>
import AppNav from './AppNav.vue';
import AppText from './AppText.vue'

export default {
    data () {
        return {
            navheaders:[
                {
                    name:'HOME',
                    val:true,
                },
                {
                    name:'SHOP',
                    val:false,
                },
                {
                    name:'ABOUT',
                    val:false,
                },
                {
                    name:'GALLERY',
                    val:false,
                },
                {
                    name:'LOCATIONS',
                    val:false,
                },
                {
                    name:'JOURNAL',
                    val:false,
                },
                {
                    name:'CONTACT',
                    val:false,
                },
                {
                    name:'MY ACCOUNT',
                    val:false,
                
                },
            ],
            textheaders:[
                {
                pretitle : 'FRESCH & TASTY BAKERY EVERY DAY',
                title : 'The Perfect Frech Bread',
                content : 'Cras conserquat lectus vestiblum toutor pulvinar,quis eiusmond nisl varius. Aliquam erat volutpat. Nullam quis sagittin nibh ac nulla id orci tempor.',
                button : 'Explore our products',
                primary:true,
                secondary:false,
                },
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
            <ul>
                <AppNav 
                v-for="navheader in navheaders"
                :nav="navheader"
                />
                <li><font-awesome-icon icon="fa-solid fa-cart-shopping"/></li>
            </ul>
            
        </div>
        
        <AppText
        v-for="textheader in textheaders"
        :text="textheader"
        />
    </header>

</template>

<style lang="scss" scoped>
.container-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
img{
    padding-top: 20px;
    padding-left: 35px;
}
.container-text{
    width: 500px;
    padding-top: 200px;
    padding-left: 110px;
}
</style>


