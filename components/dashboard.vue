<template>
    <!-- <div> -->
        <!-- <Navigation /> -->
        <section class="flex flex-col gap-4 w-full">
            <options2 />
            <options />
            <!-- <p class="text-blue-600">{{ user.current.value }}sssss</p> -->
            <!-- <p class="text-blue-600">{{ profile.current.value[0].lastName }}</p> -->
            <!-- v-if="profile.current.value[0].lastName " -->
        </section>
         
    <!-- </div> -->
</template>

<script setup>
import Navigation from '~/components/navigation.vue';
import options from '~/components/options.vue';
import option2 from '~/components/options2.vue';

const user = useUserSession()
const profile = useProfiles()
</script>

