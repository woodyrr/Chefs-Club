<template>
    <section class="w-full ">
        <!-- <ItemsCarousel /> -->
         <!-- <div v-if="user">
            <div class="flex gap-5">
                <img :src="userAvatar" alt="" srcset="" class="w-[30%] sm:w-[20%]">
                <h2>{{ userName }}</h2>
            </div>
         </div> -->
         <!-- <div>
            {{ meals}}
         </div> -->
        <UserPublicMeals />
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