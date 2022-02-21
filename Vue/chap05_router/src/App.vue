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

const router = new VueRouter({
  routes: [
    { path: "/",              component: A01Bind },
    { path: "/A02Style",                  component: A02Style },
    { path: "/A03Params/:id/data/:name",  component: A03Params },
    { path: "/A04Props/:id/data/:name",   component: A04Props,    props: true },
    { path: "/A05Contacts",               component: A05Contacts },
    { path: "/A05ContactView/:id",        component: A05ContactView },
  ],
})

export default {
  name: 'App',
  router
}
</script>

<style>

</style>
