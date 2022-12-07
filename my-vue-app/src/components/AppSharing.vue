<script>

export default {
    data () {
        return {

        }
    }
}

</script>

<template>
    <section class="section-sharing">
        <img src="../assets/social-1.jpg" alt="">
        <div class="social">
            <span>MADE FOR SHARING</span>
            <h2>Let's stay in touch</h2>
            <button class="secondaryButton"><font-awesome-icon icon="fa-brands fa-instagram"/> Follow Us</button>
        </div>
        <img src="../assets/social-2.jpg" alt="">
        <img src="../assets/social-3.jpg" alt="">
        <img src="../assets/social-4.jpg" alt="">
        <img src="../assets/social-5.jpg" alt="">
        <img src="../assets/social-6.jpg" alt="">
    </section>

</template>

<style lang="scss" scoped>
.section-sharing{
    padding-top: 155px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
img{
    width: 395px;
    height: 430px;
    margin-top: 40px;
}
.social{
    height: 430px;
    width: 825px;
    margin-top: 40px;
    background-color: var(--card-backgroundcolor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h2{
    padding-bottom: 20px;
}
</style>