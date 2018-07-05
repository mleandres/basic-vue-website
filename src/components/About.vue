<template>
    <div class='about'>
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
.about {
    padding: 2em;
    font-size: 150%;
    letter-spacing: 1px;
}
</style>
