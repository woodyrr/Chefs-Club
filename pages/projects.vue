<template>
    <section class="flex flex-col md:flex-row gap-4 md:gap-6 w-full pt-6 px-[3%] 2xl:px-[6%] justify-between ">

        <UserUserinfo />
        <div class="border md:hidden"></div>
        <!-- <options /> -->

        <!-- //user personal public/private meals -->
         <div class="w-full">
           <div class="border-2 border-gray-200 rounded-lg  flex flex-col p-6 items-center text-center justify-between h-72 md:h-1/2 " >
                <div class="flex flex-col gap-1 sm:gap-2 items-center ">
                    <BookOpenText class="h-6 w-6  xl:w-10 md:h-6 text-gray-500" />
                    <h1 class="font-bold text-lg">Create your first ChefsClub Project</h1>
                    <div>
                        Projects are a customizable, flexible tool for planning and tracking your work.
                    </div>
                </div>
                <div class="">
                    <Button class="bg-green-600" >New Project</Button>
                </div>
           </div>
         </div>
        
    </section>

</template>

<script setup>
import { BookOpenText, Edit2Icon } from 'lucide-vue-next';


const client = useSupabaseClient()
const user = useSupabaseUser()

const userName = user.value.user_metadata.user_name
const userAvatar = user.value.user_metadata.avatar_url
const name = user.value.user_metadata.name

</script>