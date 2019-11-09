import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'

/*free solid*/
import {} from '@fortawesome/free-solid-svg-icons'

/*free regular*/
import {} from '@fortawesome/free-regular-svg-icons'

/*free brands*/
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin);

/*pro duotone*/
import {faMapMarkerAlt, faEnvelope, faPhone, faCircle} from '@fortawesome/pro-duotone-svg-icons'

library.add(faMapMarkerAlt);
library.add(faEnvelope);
library.add(faPhone);
library.add(faCircle);

/*pro solid*/
import {} from '@fortawesome/pro-solid-svg-icons'


/*pro regular*/
import {} from '@fortawesome/pro-regular-svg-icons'

/*pro light*/
import {faHorizontalRule} from '@fortawesome/pro-light-svg-icons'

library.add(faHorizontalRule);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

