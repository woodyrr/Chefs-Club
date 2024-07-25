<template>
    <!-- <div>
        
        <navigation class=" w-full">
            <dashboard />
        </navigation>
         
    </div> -->


    <div v-if="user.current.value">
        <navigation class=" w-full">
            <dashboard />
        </navigation>
    </div>
    <!-- <div v-if="user.current.value">
        <UserSignupform />
        <userName />
        <div class="flex">
            <birthDate />
            <formCarousel />
        </div>
        
    </div> -->
    <div v-else>
        <AuthPages />
    </div>
</template>

<script setup>
import Navigation from '~/components/navigation.vue';
import options from '~/components/options.vue';
// import userName from '~/components/User/formItems/username.vue';
import birthDate from '~/components/User/formItems/birthDate.vue';
import formCarousel from '~/components/User/formItems/formCarousel.vue';

const user = useUserSession()
// const router = useRouter()

</script>