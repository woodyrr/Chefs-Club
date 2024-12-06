<template>
  <div>
    <navigation v-if="user" class="w-full">
          <NuxtPage />
    </navigation>
    <div class="container" style="padding: 50px 0 100px 0" v-else>
      <AuthAuthlog />
    </div>
  </div>
</template>
<script setup>
const user = useSupabaseUser()
</script>