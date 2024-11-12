<template>
  <div>
    <NuxtLink
      to="#"
      class="flex items-center gap-4 p-3 w-min text-black hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white"
      :class="defaultTransition"
    >
      <div class="w-6 h-6 text-dark">
        <slot name="icon"></slot>
      </div>

      <div class="text-xl hidden lg:block" :class="textClass">
        <slot name="name"></slot>
      </div>

      <div>
        <!-- <slot name=""></slot> -->
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import useTailwindConfig from "../../../composable/useTailwindConfig.js"; // C

const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
});

const textClass = computed(() =>
  props.active ? "font-semibold" : "font-normal"
);
</script>

<style lang="scss" scoped>
</style>