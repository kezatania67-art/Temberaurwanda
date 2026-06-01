import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import About from '../views/about.vue'
import Service from '../views/services.vue'
import Contact from '../views/contact.vue'

import photos from '../views/photos.vue'
import videos from '../views/videos.vue'

import kigali from '../views/kigali.vue'
import northern from '../views/northern.vue'
import southern from '../views/southern.vue'
import eastern from '../views/eastern.vue'
import western from '../views/western.vue'

const routes = [
{
path: '/',
name: 'HomeView',
component: HomeView
},

{
path: '/about',
name: 'About',
component: About
},

{
path: '/services',
name: 'Service',
component: Service
},

{
path: '/contact',
name: 'Contact',
component: Contact
},

{
path: '/photos',
name: 'photos',
component: photos,
alias: '/gallery'
},

{
path: '/videos',
name: 'videos',
component: videos
},

{
path: '/kigali',
name: 'kigali',
component: kigali
},

{
path: '/northern',
name: 'northern',
component: northern
},

{
path: '/southern',
name: 'southern',
component: southern
},

{
path: '/eastern',
name: 'eastern',
component: eastern
},

{
path: '/western',
name: 'western',
component: western
}
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router
