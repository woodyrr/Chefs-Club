<template>
    

    <div class=" flex justify-center items-center">
        <section class="flex flex-col md:flex-row gap-4 md:gap-6 w-full pt-6 px-[3%] lg:px-[4%]  max-w-[1400px] justify-between ">

            <UserUserinfo />
            <div class="border md:hidden"></div>
        <!-- <options /> -->

        <!-- //user personal public/private meals -->
        <div class="w-full">
            <Repositories class=""/>
         </div>

        </section>
    </div>

</template>

<script setup>
import { Edit2Icon } from 'lucide-vue-next';


const client = useSupabaseClient()
const user = useSupabaseUser()

const userName = user.value.user_metadata.user_name
const userAvatar = user.value.user_metadata.avatar_url
const name = user.value.user_metadata.name

</script>