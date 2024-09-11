<template>
    <!-- <div>
        
        <navigation class=" w-full">
            <dashboard />
        </navigation>
         
    </div> -->


    <!-- <div v-if="user.current.value">
        <navigation class=" w-full">
            <dashboard />
        </navigation>
    </div> -->
    <div v-if="user.current.value" >
        <!-- <div v-for="items in profile.current.value">
            <div v-if="items.userId == user.current.value.userId"> -->
                <navigation class=" w-full">
                    <dashboard />
                </navigation>
            <!-- </div> -->
            <!-- <div v-else>
                <AuthPages />
            </div> -->
        <!-- </div> -->
    </div>
    <div v-else>
        <AuthPages />
    </div>
    
    <!-- <div v-if="user.current.value">
        <UserSignupform />
        <userName />
        <div class="flex">
            <birthDate />
            <formCarousel />
        </div>
        <div v-for="items in profile.current.value">
            <div v-if="items.userId == user.current.value.userId">
                <div v-if="items.firstName">
                  Welcome {{ items.firstName }}
                </div>
            </div>
        </div>
    </div> -->
    <!-- <div v-else>
        <AuthPages />
    </div> -->
</template>

<script setup>
import Navigation from '~/components/navigation.vue';
import options from '~/components/options.vue';
// import userName from '~/components/User/formItems/username.vue';
import birthDate from '~/components/User/formItems/birthDate.vue';
import formCarousel from '~/components/User/formItems/formCarousel.vue';
import { useProfiles } from '~/composables/profiles/useProfiles';
import {useUserSession} from '~/composables/profiles/useUserSession.ts'

const user = useUserSession()
const profile = useProfiles()
// const router = useRouter()

</script>