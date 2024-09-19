<script setup>
import { Github } from 'lucide-vue-next';
import { useRouter } from 'nuxt/app';
// const { user } = await supabase.auth.getUser();

const user = useSupabaseUser()
const client = useSupabaseClient()
const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

watchEffect(() => {
  if (user.value) {
    navigateTo('/confirm')
  }
})

</script>

<template>
   
    <section class=" min-h-screen flex items-center justify-center bg-foreground">

        <Card class="m-auto max-w-xl w-[90%] sm:w-[70%] "  >
            <CardHeader class="text-center flex flex-col gap-3 sm:gap-2">
            <!-- <p class="text-black">s{{ userInfos.value }}</p> -->
            <CardTitle class="text-3xl xl:text-4xl">Sign In to your account</CardTitle>
            <CardDescription class="text-lg xl:text-xl">
                SignIn/SignUp With Oauth
            </CardDescription>
            </CardHeader>
            <CardContent>
            <div class="grid gap-4">
                <div class="grid grid-cols-1 gap-6 ">
                    <Button variant="outline" class="text-lg xl:text-xl p-6 xl:p-8"  @click="client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })">
                        <svg role="img" viewBox="0 0 24 24" class="mr-2 h-5 w-5 xl:h-8 xl:w-8">
                        <path
                            fill="currentColor"
                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        />
                        </svg>
                        Google
                        
                    </Button>
                </div>
                <div class="grid grid-cols-1 gap-6 ">
                    <Button variant="outline" class="text-lg xl:text-xl p-6 xl:p-8"  @click="client.auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })">
                        <Github class="h-8 w-6 xl:w-8 mr-2" />
                        Github
                        
                    </Button>
                </div>
            </div>
            
            </CardContent>
        </Card>
    </section>

    
    
 
</template>