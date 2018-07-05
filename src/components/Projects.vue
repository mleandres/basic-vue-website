<template>
    <div class='projects'>
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
.projects {
    padding: 2em;
    font-size: 150%;
    letter-spacing: 1px;
}
</style>
