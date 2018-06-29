<template>
  <div id='sidebar-left'>
      <p>Links to other stuff</p>
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
        {name: 'Yifan Wu', link: 'https://soundcloud.com/yifan-wu'}
      ]
    }
  }
}
</script>

<style scoped>
p {
  color: #005858;
}

ul {
  text-align: left;
  font-size: 100%;
  padding: 20px;
  margin-left: 50px;
  list-style-type: disc;
}

li a {
  text-decoration: none;
  color: #003f3f;
}
</style>
