<template>
    
    <div class=" flex justify-center items-center">
        <section class="flex flex-col md:flex-row gap-4 md:gap-6 w-full pt-6 px-[3%] lg:px-[4%]  max-w-[1400px] justify-between ">

            <UserUserinfo />
            <div class="border md:hidden"></div>
        <!-- <options /> -->

        <!-- //user personal public/private meals -->
        <div class="w-full">
            <div class="flex flex-col gap-2 w-full border border-gray-200 rounded-lg p-3">
                <div class="flex justify-between text">
                    <h1 class="flex gap-1" >
                        <div class="font-semibold">{{ userName }}'s </div>
                        <div>profile</div> 
                    </h1>
                    <button>
                        <Edit2Icon class="h-4 w-4" />
                    </button>
                    
                </div>
            
                <ul class="px-6 text-[14px] lg:text-[15px] list-disc">
                    <li class="" >👋 Hi, i'm @{{ userName }}</li>
                    <li>👀 I'm interested in ...</li>
                    <li>🌱 I'm currently learning ...</li>
                    <li>💞️ I'm looking to collaborate on ...</li>
                    <li>📫 How to reach me ...</li>
                    <li>😄 Cullinary level or experience: ...</li>
                    <li>⚡ Fun fact: ...</li>
                </ul>
                
            </div>
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

