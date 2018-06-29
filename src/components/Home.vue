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
    document.title = 'Home'
  }
}
</script>

<style scoped>
p {
  padding: 10px;
  letter-spacing: 1px;
  color: darkcyan;
}
</style>
