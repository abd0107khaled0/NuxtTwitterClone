<template>
  <div class="container">
    <h2 class="text-center text-red-500 text-2xl my-4">Hello world in composition vue</h2>

    <div class="learn">{{ MustacheData }}</div>
  </div>
</template>

<script setup>
const MustacheData = ref("Mustache");
</script>

<style lang="scss" scoped>
</style>