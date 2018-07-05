<template>
  <div class="app">
    <nav class="cl-effect">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Work</router-link>
      <router-link to="/music">Reinsurance</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class=view>
      <router-view/>
    </div>

    <sidebar-left class='sidebar-left'/>

    <sidebar-right class='sidebar-right'/>

    <app-footer class='app-footer'/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Music from './components/Music.vue'
import About from './components/About.vue'

import SideBarLeft from './components/SideBarLeft.vue'
import SideBarRight from './components/SideBarRight.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    '/': Home,
    '/projects': Projects,
    '/music': Music,
    '/about': About,
    'sidebar-left': SideBarLeft,
    'sidebar-right': SideBarRight,
    'app-footer': Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style src='./style.css'></style>
