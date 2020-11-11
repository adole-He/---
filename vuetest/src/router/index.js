import Vue from 'vue'
import VueRouter from 'vue-router'
import topic1 from '@/views/topic1'
import topic2 from '@/views/topic2'
import topic3 from '@/views/topic3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/topic1',
    name: 'topic1',
    component: topic1
  },
  {
    path: '/topic2',
    name: 'topic2',
    component: topic2
  },
  {
    path: '/topic3',
    name: 'topic3',
    component: topic3
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
