<template>
  <div>
    <div
      class="p-3 hover:bg-gray-100 dark:hover:bg-gray-300  cursor-pointer border-b "
      :class="wrapperClass"
    >Item</div>
  </div>
</template>

<script setup>
import useTailwindConfig from "~/composable/useTailwindConfig.js";

const { defaultTransition, twitterBorderColor } = useTailwindConfig();
const wrapperClass = computed(() => {
  return defaultTransition + " " + twitterBorderColor;
});
</script>

<style lang="scss" scoped>
</style>