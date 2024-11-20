<template>
    

        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-3 md:gap-5">
            <div class="flex justify-start md:flex-col gap-3 lg:gap-5 items-center w-5/6 md:w-full">
                        <div class="">
                            <img :src="userAvatar" alt="" srcset="" class="h-full w-24 md:w-40 lg:w-72 rounded-full border border-green-200">
                        </div>
                        <!-- h-24 w-32 md:h-48 md:w-48 lg:h-72 lg:w-72 2xl:w-72 2xl:h-72 -->
                <div class="flex flex-col text-gray-600 text-left w-full">
                    <div class="text-base lg:text-xl font-bold  text-gray-800">{{ name }}</div>
                    <div class="flex gap-1 md:gap-0">
                        <div class=" text-sm md:text-base lg:text-lg font-bold text-gray-600">{{ userName }}</div>
                        <div class=" text-sm md:text-base lg:text-lg font-bold text-gray-600">-Cooking level</div>
                    </div>
                </div>
                
            </div>
            <div>
                User description
            </div>

            <button class="bg-gray-100 text-black text-center p-1 rounded-lg text-lg w-full border border-gray-200">Edit profile</button>
            <div>
                <div>user email</div>
                <div>user user website/portfoilio</div>
                <div>user following/followers</div>
            </div>
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
