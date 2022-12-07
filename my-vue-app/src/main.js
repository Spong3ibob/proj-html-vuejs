import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faCartShopping,faChevronRight,faChevronLeft,faFacebook,faInstagram)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')




