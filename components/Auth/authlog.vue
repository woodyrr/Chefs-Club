<script setup>
import { ExternalLink } from 'lucide-vue-next';

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`
// watchEffect(() => {
//   if (user.value) {
//     navigateTo('/confirm')
//   }
// })

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value, options:{emailRedirectTo:redirectTo} })
    
    if (error) throw error
    alert("check your email for special link")
    
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <!-- <div class="bg-[#101010] w-full h-full py-[10%] text-white"> -->
        <!-- <form class=" flex justify-center items-center text-center border p-10" @submit.prevent="handleLogin">
            <div class="">
                <h1 class="">Supabase + Nuxt 3</h1>
                <p class="">Sign in via magic link with your email below</p>
                <div>
                    <input class="" type="email" placeholder="Your email" v-model="email" />
                </div>
                <div>
                    <input
                    type="submit"
                    class="button block"
                    :value="loading ? 'Loading' : 'Send magic link'"
                    :disabled="loading"
                    />
                </div>
            </div>
        </form> -->




        <section class=" min-h-screen flex items-center justify-center  bg-[#cec5c586]">

                <Card class="m-auto max-w-xl w-[90%] sm:w-[70%]  bg-[#101010] text-[#fff] border border-[#0000008a]"  >
                    <CardHeader class="text-center flex flex-col gap-3 sm:gap-2 font-semibold">
                        Sign in
                    <CardTitle class="text-2xl xl:text-3xl">Chef's Club </CardTitle>
                    <CardDescription class="text-lg xl:text-xl text-[#ffffff8a]">
                        Via magic link with your email below
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div class="grid gap-4">
                        
                        <form class="" @submit.prevent="handleLogin">
                            <div class="flex flex-col gap-3 border border-green-950 rounded-sm pt-1 px-1">
                                <div class="border border-[#363636] border-1 rounded-lg ">
                                    <input class="w-full p-2 text-black border " type="email" placeholder="Your email" v-model="email" />
                                </div>
                                <div class="border border-[#363636] w-full flex rounded-t-sm justify-center">
                                    <input
                                    type="submit"
                                    class="button block duration-300 w-full  hover:bg-[#aac986] p-2 cursor-pointer rounded-t-sm"
                                    :value="loading ? 'Loading' : 'Send magic link'"
                                    :disabled="loading"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    </CardContent>
                </Card>
        </section>

    <!-- </div>
   -->
</template>