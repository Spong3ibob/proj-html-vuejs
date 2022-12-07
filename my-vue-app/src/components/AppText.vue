<script>
export default {
    data (){
        return {

        }
    },
    props: {
        text:Object,
    }
}
</script>

<template>
    <div class="container-text">
        <span>{{ text.pretitle }}</span>
        <h1>{{ text.title }}</h1>
        <h2>{{ text.descrition }}</h2>
        <p>{{ text.content }}</p>
        <button :class="{primaryButton: text.primary, secondaryButton: text.secondary}">{{ text.button }}</button>
    </div>

</template>

<style lang="scss">


</style>