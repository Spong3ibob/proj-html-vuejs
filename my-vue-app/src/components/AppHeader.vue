<script>
import AppNav from './AppNav.vue';
import AppText from './AppText.vue'

export default {
    data () {
        return {
            navheaders:[
                // link={
                //     name:'HOME',
                //     val:true,
                // },
                'SHOP',
                'ABOUT',
                'GALLERY',
                'LOCATIONS',
                'JOURNAL',
                'CONTACT',
                'MY ACCOUNT',
            ],
            // textheaders:[
            //     pretitle = 'FRESCH & TASTY BAKERY EVERY DAY',
            //     title = 'The Perfect Frech Bread',
            //     content = 'Cras conserquat lectus vestiblum toutor pulvinar,quis eiusmond nisl varius. Aliquam erat volutpat. Nullam quis sagittin nibh ac nulla id orci tempor.',
            //     button = 'Explore our products',
            // ]
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
            :nav="navheader"
            />
        </div>
        
        <AppText/>
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
}
</style>


