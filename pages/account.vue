<template>
    <div  class=" ">
        <user-profile />
    </div>
</template>

<script setup>
// const user = useSupabaseUser()
// console.log( user.value)
// console.log(user.value.user_metadata.name)

</script>

<style scoped>

</style>







<!-- <template>
    
    <div class=" flex justify-center items-center">
        <section class="flex flex-col md:flex-row gap-4 md:gap-6 w-full pt-6 px-[3%] lg:px-[4%]  max-w-[1400px] justify-between ">

            <UserUserinfo />
            <div class="border md:hidden"></div>
        
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

</script> -->


<!-- <script setup>
const supabase = useSupabaseClient()

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_path = ref('')

loading.value = true
const user = useSupabaseUser()

const { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url`)
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  website.value = data.website
  avatar_path.value = data.avatar_url
}

loading.value = false

async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user.email" disabled />
    </div>
    <div>
      <label for="username">Username</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="website" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template> -->