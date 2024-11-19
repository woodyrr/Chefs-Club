<template>
        <section class="flex flex-col md:flex-row gap-4 md:gap-8 w-full pt-6 px-[3%] justify-between ">
            <user-profile class="w-full" />
            <div class="border md:hidden"></div>
            <!-- <options /> -->

            <!-- //user personal public/private meals -->
            <div class="flex flex-col gap-2 w-full border border-gray-300">
                <div class="flex justify-between">
                    <h1>{{ userName }} / SUMMARY.md</h1>
                    <Edit2Icon />
                </div>
            
                <ul>
                    <li>👋 Hi, i'm @{{ userName }}</li>
                    <li>👀 I'm interested in ...</li>
                    <li>🌱 I'm currently learning ...</li>
                    <li>💞️ I'm looking to collaborate on ...</li>
                    <li>📫 How to reach me ...</li>
                    <li>😄 Cullinary level or experience: ...</li>
                    <li>⚡ Fun fact: ...</li>
                </ul>
                
            </div>
        </section>
</template>

<script setup>
import options from '~/components/options.vue';
import {onMounted} from 'vue';
import { Edit2Icon } from 'lucide-vue-next';

const client = useSupabaseClient()
const user = useSupabaseUser()

const userName = user.value.user_metadata.user_name
const userAvatar = user.value.user_metadata.avatar_url
const name = user.value.user_metadata.name
</script>

