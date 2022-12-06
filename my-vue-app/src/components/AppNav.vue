<script>
export default {
    data (){
        return {

        }
    },
    props: {
        nav:Object,
    }
}
</script>

<template>
    <ul>
        <li :class="active == true">{{ nav }}</li>
    </ul>
    <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
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