import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import AllUserFeedback from "@/components/AllUserFeedback";
import GroupUserFeedback from "@/components/GroupUserFeedback";
import SingleUserFeedback from "@/components/SingleUserFeedback";
import LatestStats from "@/components/LatestStats";
import HistoricalStats from "@/components/HistoricalStats";
Vue.use(Router)

const router = new Router({
  routes:[
      {
        path:'/feedback',
        name:'complete',
        component:AllUserFeedback,
      },
      {
        path:'/feedback/group/:id',
        name:'group',
        component:GroupUserFeedback,
        props:true,
      },
      {
        path:'/feedback/user/:id',
        name:'user',
        component:SingleUserFeedback,
        props:true,
      },
      {
        path:'/stats/latest',
        name:'stats',
        component:LatestStats,
        props:true,
      },
      {
        path:'/stats',
        name:'histoty_stats',
        component:HistoricalStats,
        props:true,
      },
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
