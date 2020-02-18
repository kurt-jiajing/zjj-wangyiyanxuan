import Home from '../pages/Home/Home.vue'
import Classification from '../pages/Classification/Classification.vue'
import WorthBuy from '../pages/WorthBuy/WorthBuy.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
  {
    path: '/Home',
    component: Home,
    meta: {
      isShowFooter:true
    }
  },
  {
    path: '/Classification',
    component: Classification,
    meta: {
      isShowFooter:true
    }
  },
  {
    path: '/WorthBuy',
    component: WorthBuy,
    meta: {
      isShowFooter:true
    }
  },
  {
    path: '/Shopping',
    component: Shopping,
    meta: {
      isShowFooter:true
    }
  },
  {
    path: '/Profile',
    component: Profile,
    meta: {
      isShowFooter:true
    }
  },
  {
    path: '/',
    redirect: '/Home'
  },
]