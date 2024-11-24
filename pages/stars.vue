<template>

    <div class=" flex justify-center items-center">
        <section class="flex flex-col md:flex-row gap-4 md:gap-6 w-full pt-6 px-[3%] lg:px-[4%]  max-w-[1400px] justify-between ">

            <UserUserinfo />
            <div class="border md:hidden"></div>
        <!-- <options /> -->

        <!-- //user personal public/private meals -->
            <div class="w-full">
                <div class="border-2 border-gray-200 rounded-lg  flex flex-col p-6 items-center text-center justify-around h-72 md:h-1/2 " >
                        <div class="flex flex-col gap-1 sm:gap-2 items-center ">
                            <Stars class="h-6 w-6  xl:w-10 md:h-6 text-gray-500" />
                            <h1 class="font-bold text-lg md:text-base lg:text-lg">Create your first list</h1>
                            
                        </div>
                        <div class="">
                            <div class="text-base md:text-sm lg:text-base">
                                Lists make it easier to organize and curate recipes that you have starred.
                            </div>
                            <button class="text-[#006d80]" >Create your first list.</button>
                        </div>
                </div>
            </div>

        </section>
    </div>

</template>

<script setup>
import { BookOpenText, Edit2Icon, Stars } from 'lucide-vue-next';


const client = useSupabaseClient()
const user = useSupabaseUser()

const userName = user.value.user_metadata.user_name
const userAvatar = user.value.user_metadata.avatar_url
const name = user.value.user_metadata.name

</script>