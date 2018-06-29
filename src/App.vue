<template>
  <div id="app">
    <sidebar-left id='sb-left'/>
    <nav class="cl-effect">
      <router-link class='navi' to="/">Home</router-link>
      <router-link class='navi' to="/projects">Work</router-link>
      <router-link class='navi' to="/music">Reinsurance</router-link>
      <router-link class='navi' to="/about">About</router-link>
    </nav>
    <div id=view>
      <router-view/>
    </div>

    <sidebar-right id='sb-right'/>

    <app-footer id='app-footer'/>
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
