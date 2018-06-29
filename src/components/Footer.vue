<template>
  <div id='app-footer'>
      <p>Copyright {{ date }} {{ author }}</p>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      author: 'no one'
    }
  },
  computed: {
    date: () => {
      var d = new Date()
      return d.getFullYear()
    }
  }
}
</script>

<style scoped>
#app-footer {
    padding: 10px;
}

p {
  color: #005858;
}
</style>
