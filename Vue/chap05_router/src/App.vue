<template>
  <div class="card-body">
      <h1>Vue Router</h1>

      <div>
        <router-link to="/">HOME</router-link> | 
        <router-link to="/A02Style">A02Style</router-link> | 

        <router-link to="/A03Params/1003/data/NolBu">NolBu</router-link> | 
        <router-link to="/A03Params/1004/data/BangJa">BangJa</router-link> | 
        <router-link to="/A04Props/1005/data/HangDan">A04Props</router-link> | 
        <router-link to="/A05Contacts">A05Contacts</router-link> | 

        <router-link to="/A06Query?id=1006&name=Hungbu&address=Seoul#TOP">A06Query</router-link> | 

        <router-link to="/A07ChildRouter">A07ChildRouter</router-link> | 
      </div>

      <hr>

      <div>
          <!-- Link로 선택된 Component가 표시되는 위치 -->
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'

import A01Bind from './components/A01Bind.vue'
import A02Style from './components/A02Style.vue'
import A03Params from './components/A03Params.vue'
import A04Props from './components/A04Props.vue'
import A05Contacts from './components/A05Contacts.vue'
import A05ContactView from './components/A05ContactView.vue'
import A06Query from './components/A06Query.vue'
import A07ChildRouter from './components/A07ChildRouter.vue'
import CompanyInfo from './components/childComponent/CompanyInfo.vue'
import CompanyWay from './components/childComponent/CompanyWay.vue'

const router = new VueRouter({
  routes: [
    { path: "/",              component: A01Bind },
    { path: "/A02Style",                  component: A02Style },
    { path: "/A03Params/:id/data/:name",  component: A03Params },
    { path: "/A04Props/:id/data/:name",   component: A04Props,    props: true },
    { path: "/A05Contacts",               component: A05Contacts },
    { path: "/A05ContactView/:id",        component: A05ContactView },
    { path: "/A06Query",                  component: A06Query },
    { path: "/A07ChildRouter",            component: A07ChildRouter,
        children: [
          // 상대패스로 지정
          { path: '',             component: CompanyInfo},  //    /A07ChildRouter
          { path: 'way',          component: CompanyWay},   //    /A07ChildRouter/way

          // 절대패스로 지정
          { path: '/A07ChildRouter/view/:id',   component: A05ContactView }
        ]
    },
  ],
})

export default {
  name: 'App',
  router
}
</script>

<style>

</style>
