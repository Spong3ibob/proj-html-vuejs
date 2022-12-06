<script>
import AppText from './AppText.vue'

export default {
    dat () {
        return {
            textshops:[
                {

                    descrition : 'title',
                    content : 'text',
                    button : 'Shop all products',
                    primary:false,
                    secondary:true,
                },
            ]
        }

    },
    components:{
        AppText,
    }

}
</script>

<template>
<AppText/>

</template>

<script lang="scss" scoped>


</script>