<template>
    <div id='music'>
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
    document.title = 'Music'
  }
}
</script>

<style scoped>
#music {
    padding: 20px;
    font-size: 150%;
    font-weight: bold;
}
</style>
