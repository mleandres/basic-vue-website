<template>
  <div class='app-footer'>
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
.app-footer {
    padding: 1em;
    background: #222;
}

p {
  color: #DDD;
}
</style>
