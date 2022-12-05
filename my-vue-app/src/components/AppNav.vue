<script>
export default {
    data (){
        return {

        }
    },
    props: {
        info:Object,
    }
}
</script>

<template>
    <ul>
        <li>{{ info }}</li>
        <!-- <li class="active">HOME</li>
        <li>SHOP</li>
        <li>ABOUT</li>
        <li>GALLERY</li>
        <li>LOCATIONS</li>
        <li>JOURNAL</li>
        <li>CONTACT</li>
        <li>MY ACCOUNT</li> -->
    </ul>

</template>

<style lang="scss">
ul{
    display: flex;
    li{
        margin:0 20px;
        list-style-type: none;
        color: var(--text-primary-color);
        padding-bottom: 10px;
    }
    .active{
        border-bottom: 2px solid;
    }
}

</style>