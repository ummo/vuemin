import Noauth from '../layout/noauth.vue'
import Home from '../pages/home.vue'

const router = [
  { path: '/noauth', component: Noauth },
  { path: '/', component: Home, auth: 'AUTH_HOME' },
]

export default router