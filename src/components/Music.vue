<template>
    <div class='music'>
        {{ this.name }} coming soon...
    </div>
</template>

<script>
export default {
  name: 'Music',
  data () {
    return {
      name: 'Reinsurance'
    }
  },
  created: () => {
    document.title = this.name
  }
}
</script>

<style scoped>
.music {
    padding: 2em;
    font-size: 150%;
    letter-spacing: 1px;
}
</style>
