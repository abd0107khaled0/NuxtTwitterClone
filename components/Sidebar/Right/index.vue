<template>
  <div>
    <div class="flex flex-col ">
      <!-- preview card : whats happening -->
      <SidebarRightPreviewCard :title="'whats happening'">
        <SidebarRightPreviewCardItem />
      </SidebarRightPreviewCard>

       <!-- preview card : who to follow -->
       <SidebarRightPreviewCard :title="'who to follow'"/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>