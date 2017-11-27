import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './pages/MainPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import SettingsPage from './pages/SettingsPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/main',
      redirect: '/main/home',
      name: 'main',
      component: MainPage,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: HomePage,
        },
        {
          path: 'news',
          name: 'News',
          component: NewsPage,
        },
      ],
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage,
    },
  ],
})

export default router
