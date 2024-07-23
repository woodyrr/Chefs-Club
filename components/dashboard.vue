<template>
    <!-- <div> -->
        <!-- <Navigation /> -->
        <section class="flex flex-col gap-4 w-full">
            <options2 />
            <options />
            <p class="text-blue-600">{{ user.current.value }}sssss</p>
        </section>
         
    <!-- </div> -->
</template>

<script setup>
import Navigation from '~/components/navigation.vue';
import options from '~/components/options.vue';
import option2 from '~/components/options2.vue';

const user = useUserSession()
</script>

