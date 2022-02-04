import Home from './views/Home.vue';
import Recharge from './views/Recharge.vue'
import Task from './views/Task.vue'
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
},
{
  name:'Task',
  component:Task,
  path:'/task'
}

];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;