<script>
export default {
    data (){
        return {

        }
    },
}
</script>

<template>
    <ul>
        <li class="active">HOME</li>
        <li>SHOP</li>
        <li>ABOUT</li>
        <li>GALLERY</li>
        <li>LOCATIONS</li>
        <li>JOURNAL</li>
        <li>CONTACT</li>
        <li>MY ACCOUNT</li>
        <li><font-awesome-icon icon="fa-solid fa-cart-shopping" /></li>
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