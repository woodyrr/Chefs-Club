<template>
    

        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-3 md:gap-5">
            <div class="flex justify-start md:flex-col gap-3 lg:gap-5 items-center w-5/6 md:w-full">
                        <div class="">
                            <!-- <img src="https://robohash.org/woody.png"> -->
                            <img :src="avatar_path" alt="" srcset="" class="h-full w-24 md:w-72 xl:w-96 rounded-full border border-green-200">
                        </div>
                        
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

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(true)
const username = ref('')
const bio = ref('')
const socials = ref('')

const avatar_path = ref(`https://robohash.org/${user.email}.png`)
loading.value = true


const { data } = await supabase
  .from('profiles')
  .select(`username, socials, avatar_url, bio`)
  .eq('id', user.value.id)
  .single()


if (data) {
  username.value = data.username
  socials.value = data.socials
  bio.value = data.bio
  avatar_path.value = data.avatar_url
}

</script>






