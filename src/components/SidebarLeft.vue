<template>
  <div class='sidebar-left'>
      <p class='title'>Links to other stuff</p>
      <ul>
          <li v-for="(thing,index) in stuff" :key="index">
              <a v-bind:href='thing.link'>{{ thing.name }}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar-left',
  data () {
    return {
      stuff: [
        {name: 'Google', link: 'https://www.google.com'},
        {name: 'Something Good', link: 'https://soundcloud.com/yifan-wu'},
        {name: 'Spheres', link: 'https://mleandres.github.io/'}
      ]
    }
  }
}
</script>

<style scoped>
.sidebar-left {
  background: #CCC;
  padding: 1em;
}

.title {
  font-size: 130%;
  letter-spacing: 1px;
  color: #007272;
}

ul {
  text-align: left;
  font-size: 100%;
  padding: 1em;
  margin-left: 2em;
  list-style-type: disc;
}

li {
  margin-bottom: 0.4em;
}

li a {
  text-decoration: underline;
  color: #005858;
}
</style>
