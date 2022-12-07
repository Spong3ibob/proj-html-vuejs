<script>
import AppText from './AppText.vue'

export default {
    dat () {
        return {
            textshops:[
                {
                    descrition: 'Find a freshly baked product perfect for you',
                    content: 'Integer a nibh vitae ex porttitor return et ut velit. Eitiam ac felis at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.',
                    button: 'Shop all products',
                    primary:false,
                    secondary:true,
                },
            ]
        }

    },
    components: {
        AppText,
    }

}
</script>

<template>
    <section class="section-shop">
        <AppText 
        v-for="textshop in textshops"
        :text="textshop"
        />
        <div class="carosel">
            <div class="card">
                <img src="../assets/choco-chip-cookies.jpg" alt="">
                <h3>Choco Chip Cookies</h3>
                <p>$19.00 - $39.00</p>
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="arrow-left"/>
            </div>
            <div class="card">
                <img src="../assets/strawberry-jam-cookies.jpg" alt="">
                <h3>Strawberry Jam Cookies</h3>
                <p>$24.00 - $62.00</p>
            </div>
            <div class="card">
                <img src="../assets/strawberry-donut.jpg" alt="">
                <h3>Strawberry Donut</h3>
                <p>$24.00 - $42.00</p>
            </div>
            <div class="card">
                <img src="../assets/perfect-macarons.jpg" alt="">
                <h3>Perfect Macarons</h3>
                <p>$18.00 - $52.00</p>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="arrow-right"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.section-shop{
    display: flex;
    padding-top: 230px;
}
.container-text{
    width: 370px;
}
.carosel{
    display: flex;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
        height: 385px;
        width: 300px;
        padding-left: 20px;
    }
    p{
        padding-top: 20px;
        color: var(--text-primary-color);
    }
    h3{
        padding-top: 20px;
    }
}
.arrow-right{
  top: 195px;
  right: 0px;
}
.arrow-left{
  top: 195px;
  left: 20px;
}
</style>