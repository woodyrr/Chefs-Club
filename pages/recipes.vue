<template>
    <section class="flex flex-col md:flex-row gap-4 md:gap-6 w-full pt-6 px-[3%] 2xl:px-[6%] justify-between ">

        <UserUserinfo />
        <div class="border md:hidden"></div>
        <!-- <options /> -->

        <!-- //user personal public/private meals -->
         <div class="w-full">
           <h1>repositories ect..</h1> 
         </div>
        
    </section>

</template>

<script setup>
import { Edit2Icon } from 'lucide-vue-next';


const client = useSupabaseClient()
const user = useSupabaseUser()

const userName = user.value.user_metadata.user_name
const userAvatar = user.value.user_metadata.avatar_url
const name = user.value.user_metadata.name

</script>