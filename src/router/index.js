import {createRouter,createWebHistory} from 'vue-router';
import HelloWorld from '@/views/HelloWorld'
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router