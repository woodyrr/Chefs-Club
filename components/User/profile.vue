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


<script setup>
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


loading.value = false


async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      socials: socials.value,
      bio: bio.value,
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
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <!-- <section class=" flex items-center justify-center  bg-[#cec5c586]"> -->

        <Card class="m-auto max-w-7xl w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] 2xl:w-[70%] "  >
            <CardHeader class="text-center flex flex-col gap-3 sm:gap-2 font-semibold">
                <!-- bg-[#101010] text-[#fff] -->
            <CardTitle class="md:text-2xl xl:text-3xl">Public Profile</CardTitle>
            <CardDescription class="text-lg xl:text-xl text-[#332f2f8a]">
                Update / modify your account
            </CardDescription>
            <div class="text-gray-600 text-xs">This is how everyone else will see you on this site</div>
            </CardHeader>
            <CardContent>
            <div class="grid gap-4">
                <form class="" @submit.prevent="updateProfile">
                    <!-- <Avatar v-model:path="avatar_path" @upload="updateProfile" /> -->
                    <div class="flex flex-col gap-5  rounded-sm">
                        <div class="border border-[#3636366e] border-1 border-t-0 border-x-0  flex flex-col p-1 gap-2">
                            <!-- <input class="w-full p-2 text-black border " type="email" placeholder="Your email" v-model="email" /> -->
                            <label for="username">Name</label>
                            <input id="username" class=" border rounded-sm border-gray-400  p-1 outline-none" type="text" placeholder="user112" v-model="username" />
                            <div class="text-xs text-gray-600">Your name may appear around Chefs-Club where you contribute or are mentioned. This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</div>
                        </div>
                        <div class="border border-[#3636366e] border-1 border-t-0 border-x-0  flex flex-col p-1 gap-2">
                            <label for="email">Public Email</label>
                            <input class="w-full border border-gray-400 rounded-sm p-1 cursor-not-allowed text-sm" id="email" type="text" :value="user.email" disabled />
                            <div class="text-xs text-gray-600">You can manage verified email addresses in your email settings</div>
                        </div>
                        <div class="border border-[#3636366e] border-1 border-t-0 border-x-0  flex flex-col p-1 gap-2">
                            <label for="bio">Bio</label>
                            <textarea 
                                class="w-full border border-gray-400 rounded-sm p-2 h-20 resize-y outline-none" 
                                id="bio" 
                                v-model="bio"
                                rows="4"
                                placeholder="Write your bio here..."
                            ></textarea>
                            <div class="text-xs text-gray-600">You can @mention other users and organizations to link to them.</div>
                        </div>
                        <div class="border border-[#3636366e] border-1 border-t-0 border-x-0  flex flex-col p-1 gap-2">
                            <!-- <input class="w-full p-2 text-black border " type="email" placeholder="Your email" v-model="email" /> -->
                            <label for="social">Social accounts</label>
                            <input id="social" class=" border rounded-sm border-gray-400  p-1 outline-none" type="link" placeholder="link" v-model="socials" />
                            <div class="text-xs text-gray-600">Your name may appear around Chefs-Club where you contribute or are mentioned. You can remove it at any time.</div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="border border-[#3636366e] w-full flex rounded-t-sm justify-center">                            
                                <input
                                    type="submit"
                                    class="button primary block cursor-pointer hover:bg-[#aac986] w-full p-2"
                                    :value="loading ? 'Loading ...' : 'Update'"
                                    :disabled="loading"
                                />
                            </div>
                            <div class="border border-[#3636366e] w-full flex rounded-t-sm justify-center">
                                <button class="button block hover:bg-red-200 w-full outline-1 p-2" @click="signOut" :disabled="loading">Sign Out</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
            
            </CardContent>
        </Card>
    <!-- </section> -->
</template>

