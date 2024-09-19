<template>
  <div>
    <div >

    </div>
    <navigation v-if="user" class="w-full">
          <NuxtPage />
    </navigation>
    <div v-else>
      <AuthAuthlog />
    </div>
  </div>
</template>
<script setup>
const user = useSupabaseUser()
</script>