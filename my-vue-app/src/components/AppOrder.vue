<script>
export default {
    data () {
        return{

        }
    }
}
</script>

<template>
    <section class="section-order">
        <div class="order">
            <span>TRY OUR SESONAL PRODUCTS</span>
            <h1>Order for pik-up or delivery to your home</h1>
            <button class="primaryButton">Shop Now</button>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.section-order{
    padding-top: 170px;
}
.order{
    width: 100%;
    height: 530px;
    padding-left: 360px;
    padding-top: 110px;
    background-image: url(../assets/call-to-action-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
span{
    color: var(--text-special-color);
}
h1{
    color: var(--primary-color);
    width: 710px;
    padding-top: 36px;
    padding-bottom: 70px;
}
</style>