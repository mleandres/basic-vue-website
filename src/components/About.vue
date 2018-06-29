<template>
    <div id='about'>
        {{ this.name }} coming soon...
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: 'About'
    }
  },
  created: () => {
    document.title = 'About'
  }
}
</script>

<style scoped>
#about {
    padding: 20px;
    font-size: 150%;
    font-weight: bold;
}
</style>
