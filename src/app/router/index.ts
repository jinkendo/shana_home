import HomeIndexView from '../views/HomeIndexView.vue'
import ContentView from '../views/ContentView.vue'

export default [
  { path: '/', redirect: '/HOME/index' },
  { path: '/index', redirect: '/HOME/index' },
  { path: '/HOME/index', component: HomeIndexView },
  { path: '/HOME/content/:id', name:"HomeContent", component: ContentView }
]