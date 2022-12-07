<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<template>
    <section class="section-location">
        <span>LOCATIONS</span>
        <h2>Visit our Bakeries</h2>
        <div class="container-location">
            <div class="card-new-york">
                <img src="../assets/new-york-bk.jpg" alt="">
                <h2>New York</h2>
                <div class="container-info">
                    <div>
                        <span>CALL US</span>
                        <p>1.800.458.556</p>
                    </div>
                    <div>
                        <span>OPEN ALL WEEK</span>
                        <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                        <button class="primaryButton">View Map</button>
                    </div>
                </div>
            </div>
            <div class="card-london">
                <img src="../assets/london-bk.jpg" alt="">
                <h2>London</h2>
                <div class="container-info">
                    <div>
                        <span>CALL US</span>
                        <p>1.800.458.556</p>
                    </div>
                    <div>
                        <span>OPEN ALL WEEK</span>
                        <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                        <button class="primaryButton">View Map</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.section-location{
    padding-top: 200px;
    text-align: center;
}
.container-location{
    padding-top: 70px;
    display: flex;
}
img{
    height: 560px;
}
.card-new-york{
    width: 845px;
    height: 770px;
    background-color: var(--background-new-york);
}
.card-london{
    width: 845px;
    height: 770px;
    background-color: var(--background-london);

}
.container-info{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 50px;
}

p{
    padding: 5px;
}
</style>