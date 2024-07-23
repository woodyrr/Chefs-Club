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
    <div v-if="user.current.value">
        <UserSignupform />
    </div>
    <div v-else>
        <AuthPages />
    </div>
</template>

<script setup>
import Navigation from '~/components/navigation.vue';
import options from '~/components/options.vue';

const user = useUserSession()
// const router = useRouter()

</script>