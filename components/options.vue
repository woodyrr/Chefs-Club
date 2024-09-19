<template>
    <section class="w-full flex flex-col gap-3">
      <div class="flex justify-between text-base">
        <div>Pinned</div>
        <div class="text-green-300">Customize your pins</div>
      </div>
      <div class="w-full grid grid-cols-0">
        <PublicMeals />
      </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';
const user = useSupabaseUser()
// const client = useSupabaseClient()
// console.log( user.value)
// console.log(user.value.user_metadata.name)
const userName = user.value.user_metadata.name
const userAvatar = user.value.user_metadata.avatar_url

const supabase = useSupabaseClient()


// const { data: meals } = await useAsyncData('dance', async () => {
//   const { data } = await supabase.from('dance').select()

//   return data
// })

const { data: meals } = await useAsyncData('meals', async () => {
  const { data } = await supabase.from('meals').select()

  return data
})
</script>