<template>
  <div class="w-full h-full">
    <navigation v-if="user" class="w-full">
          <NuxtPage />
    </navigation>
    <div class="w-full h-full "  v-else>
      <AuthAuthlog />
    </div>
    
  </div>
</template>
<script setup>
const user = useSupabaseUser()
</script>