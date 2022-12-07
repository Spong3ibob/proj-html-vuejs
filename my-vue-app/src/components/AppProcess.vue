<script>
import AppText from './AppText.vue';

export default {
    data () {
        return{
            textcards:[
                {
                    pretitle:'DONT JUST TAKE OUR WORD FOR IT',
                    descrition:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque laboriosam voluptas eius deleniti nemo, distinctio temporibus eum asperiores dolores et totam voluptate quisquam vel quos incidunt veniam, expedita doloribus.',
                    content:'Rachel Cooper, Founder',
                    primary:false,
                    secondary:false,
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
    <section class="container-process">
        <div class="card-big1">
            <div class="title-number-big">
                <h1>Tell us whath have in mind</h1>
                <h2>01</h2>
            </div>
            <div class="descrition-big">
                <span>MANUAL INGREDIENTS SELECTION</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque laboriosam voluptas eius deleniti nemo, distinctio temporibus eum asperiores dolores et totam voluptate quisquam vel quos incidunt veniam, expedita doloribus.</p>
            </div>
        </div>
        <div class="container-card-small">
            <div class="card-small">
                <div class="title-number-small">
                    <h1>We Start Baking</h1>
                    <h2>02</h2>
                </div>
                <div class="descrition-small">
                <span>SWEET & DELICIOUS</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque laboriosam voluptas eius deleniti nemo, distinctio temporibus eum asperiores dolores et totam voluptate quisquam vel quos incidunt veniam.</p>
            </div>
            </div>
            <div class="card-small-text">
                <AppText
                v-for="textcard in textcards"
                :text="textcard"
                />
            </div>
        </div>
        <div class="card-big2">
            <div class="title-number-big">
                <h1>Delivered to your home</h1>
                <h2>03</h2>
            </div>
            <div class="descrition-big">
                <span>BAKED TO ORDER & GIFT WRAPPED</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque laboriosam voluptas eius deleniti nemo, distinctio temporibus eum asperiores dolores et totam voluptate quisquam vel quos incidunt veniam, expedita doloribus.</p>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.card-big1{
height: 815px;
width: 100%;
background-image: url(../assets/bakery-process-1.jpg);
background-size: cover;
background-repeat: no-repeat;
    .title-number-big{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;

        h1{
            width: 587px;
            color: var(--primary-color);
        }
        h2{
            color: var(--primary-color);
            font-size: 70px;
            font-weight: 200;
            font-family: 'Work Sans', sans-serif;
        }
    }
    .descrition-big{
        width: 544px;
        margin-right: 100px;
        margin-top: 305px;
        margin-left: 1050px;
        span{
            color: var(--text-special-color);
        }
        p{
            color: var(--primary-color);
            padding-top: 20px;
        }
    }
}
.container-card-small{
display: flex;
justify-content: space-between;
padding: 40px 0;

    .card-small{
        height: 790px;
        width: 830px;
        background-image: url(../assets/bakery-process-2.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    }
    .title-number-small{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 50px;
        padding-left: 50px;
        padding-right: 50px;

        h1{
            color: var(--primary-color);
        }
        h2{
            color: var(--primary-color);
            font-size: 70px;
            font-weight: 200;
            font-family: 'Work Sans', sans-serif;
        }
    }
    .descrition-small{
        width: 387px;
        height: 210px;
        margin-top: 360px;
        margin-left: 50px;
        span{
            color: var(--text-special-color);
        }
        p{
            color: var(--primary-color);
            padding-top: 20px;
        }
    }
    .card-small-text{
        height: 790px;
        width: 830px;
        background-color: var(--card-backgroundcolor);
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0  80px;
    }
}
.card-big2{
    height: 815px;
    width: 100%;
    background-image: url(../assets/bakery-process-3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    .title-number-big{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;

        h1{
            width: 587px;
            color: var(--primary-color);
        }
        h2{
            color: var(--primary-color);
            font-size: 70px;
            font-weight: 200;
            font-family: 'Work Sans', sans-serif;
        }
    }
    .descrition-big{
        width: 544px;
        margin-top: 320px;
        margin-left: 100px;
        span{
            color: var(--text-special-color);
        }
        p{
            color: var(--primary-color);
            padding-top: 20px;
        }
    }
}
</style>