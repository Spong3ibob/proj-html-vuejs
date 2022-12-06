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

        <li :class="{active: nav.val}">{{ nav.name }}</li>
    
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