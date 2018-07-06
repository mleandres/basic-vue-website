<template>
  <div class="home">
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: 'Home'
    }
  },
  created: () => {
    document.title = this.name
  }
}
</script>

<style scoped>

</style>
