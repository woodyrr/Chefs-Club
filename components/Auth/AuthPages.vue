<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import GitHubIcon from '../icons/radix-icons/github-logo.svg'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { account} from '~/appwrite';
const user = useUserSession();
const profile = useProfiles()
// User states
const isSignUp = ref(false);
const email = ref('');
const password = ref('');
// const email2 = ref('');
// const password2 = ref('');


// Login user
const handleLogin = async (event) => {
  await user.login(email.value, password.value);
  email.value = '',
  password.value = ''

};

// Register user
const handleRegistration = async (event) => {
  await user.register( email.value, password.value);
  const postIdeaData = {
    userId: user.current.value?.userId,
    email: user.current.value?.providerUid,
  };

  await profile.add(postIdeaData);
  email.value = '',
  password.value = ''

};




let log = ref(true)
let sign = ref(false)




// const handleAddIdea = async () => {
// const postIdeaData = {
//     userId: user.current.value?.userId,
//     email: user.current.value?.providerUid,
//   };

//   await profile.add(postIdeaData);
// }
</script>


<template>
  
  <section class=" min-h-screen flex items-center justify-center bg-foreground">
    
    <Card class="m-auto max-w-lg " v-if="log" >
      <CardHeader>
        <!-- <p class="text-black">s{{ userInfos.value }}</p> -->
        <CardTitle class="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              v-model="email"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" placeholder="Enter your password" v-model="password" required />
          </div>
          <Button type="submit" class="w-full" @click="handleLogin()">
            Login
          </Button>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <Button variant="outline">
              <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                />
              </svg>
              Google
            </Button>
          </div>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <button @click="sign = !sign, log = !log "  class="underline">
            Sign up
          </button>
        </div>
      </CardContent>
    </Card>

    <!-- <div class="text-red-600 text-center">{{ user.current.value }}ldd</div> -->

    <Card v-if="sign">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl">
          Create an account
        </CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid grid-cols-1 gap-6">
          <!-- <Button variant="outline">
            <GitHubIcon class="mr-2 h-4 w-4" />
            GitHub
          </Button> -->
          <Button variant="outline">
            <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
              <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
            Google
          </Button>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" v-model="email" required/>
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" v-model="password" required />
        </div>
        <div>
        <Button class="w-full" @click="handleRegistration()">
          Create account
        </Button>

        <CardFooter class="mt-4 text-center text-sm flex items-center">
          <div>Already have an account?</div>
          <button @click="log = !log , sign = !sign " class="underline">
            Log In
          </button>
        </CardFooter>
        
      </div>
      </CardContent>
<!--       
      <CardFooter class="mt-4 text-center text-sm flex items-center">
        <div>Already have an account?</div>
        <button @click="log = !log , sign = !sign " class="underline">
          Log In
        </button>
      </CardFooter> -->
    </Card>
  </section>
</template>