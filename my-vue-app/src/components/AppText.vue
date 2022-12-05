<script>
export default {
    data (){
        return {

        }
    },
  
}
</script>

<template>
    <div class="conatiner-text">
        <span>FRESCH & TASTY BAKERY EVERY DAY</span>
        <h1>The Perfect Frech Bread</h1>
        <p>Cras conserquat lectus vestiblum toutor pulvinar,quis eiusmond nisl varius. Aliquam erat volutpat. Nullam quis sagittin nibh ac nulla id orci tempor.</p>
        <button>Explore our products</button>
    </div>

</template>

<style lang="scss">
.conatiner-text{
    height: 365px;
    width: 495px;
    margin-left: 100px;
    margin-top: 200px;
}
span{
    color: var(--text-secondary-color);
}
h1{
    font-size: 50px;
    padding-top: 10px;
    color: var(--text-primary-color);
    font-family: 'Playfair Display', serif;
}
p{
    font-size: 20px;
    line-height: 30px;
    padding: 45px 0;
    color: var(--text-secondary-color);
}
button{
    background-color: var(--botton-primary);
    border: none;
    color: var(--button-secondary);
    padding: 10px 25px;
    border-radius: 5px;
    font-size: 13px;
}
</style>