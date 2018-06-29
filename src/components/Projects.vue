<template>
    <div id='projects'>
        {{ this.name }} coming soon...
    </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      name: 'Work'
    }
  },
  created: () => {
    document.title = 'Projects'
  }
}
</script>

<style scoped>
#projects {
    padding: 20px;
    font-size: 150%;
    font-weight: bold;
}
</style>
