<template>
  <div class="m-2 border-2 border-gray-20"
  :class="twitterBorderColor"
  >
    <h1>{{props.title}}</h1>
  </div>
</template>

<script setup>
import useTailwindConfig from '~/composable/useTailwindConfig';

const {twitterBorderColor} = useTailwindConfig()
const props = defineProps({
  title: {
    typeof: "string",
    required: true
  }
});
</script>

<style lang="scss" scoped>
</style>