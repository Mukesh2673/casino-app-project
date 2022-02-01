import Home from './views/Home.vue';
import Recharge from './views/Recharge.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[{
    name:'Home',
    component:Home,
    path:'/'

},
{
name:'Recharge',
component:Recharge,
path:'/Recharge'
}];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;