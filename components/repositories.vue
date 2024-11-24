<script setup>
import { Button } from '@/components/ui/button'
import { ref, onMounted } from 'vue';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useFetch } from '#app'
import { ArrowBigDown, ArrowDownNarrowWide, ChefHat, Clock, LoaderCircle, MoveDown, Star, Stars, Youtube } from 'lucide-vue-next';

// const { data: meals } = await useFetch(`${useRuntimeConfig().public.baseUrl}/api/userMeals`)
// let showmore = ref(false)
// console.log(meals)
const meals = ref([]); // Initialize meals as an empty array
const showmore = ref(false); // Toggle for showing more description

const { data } = await useFetch(`${useRuntimeConfig().public.baseUrl}/api/userMeals`, {
      headers: useRequestHeaders(['cookie'])
    });
meals.value = data.value || []; 
</script>

<template>
  <section class="p-[3%] w-full border gap-8 text-[16px] text-[#E5E7EB] font-medium sm:p-1 border-b-1 border-x-0">
    <!-- Looping through each meal -->
    <div v-if="meals.length === 0" class="flex items-center justify-center w-full  text-lg">
      <LoaderCircle class="animate-spin" /> Loading meals...
    </div>


    <div v-for="(mealEntry, index) in meals" :key="index" class="w-full">
        <div class="flex w-full justify-between">
            <div class="text-black text-lg font-bold ">
                {{ mealEntry.meal.name }}
            </div>
            <div class="flex ">
                <button class="flex items-center bg-[#acacac44]  gap-2 px-4 py-1 rounded-md rounded-r-none border border-r-1 border-y-0 border-l-0 border-gray-400">
                    <Stars class="text-gray-500 w-4 lg:w-5" />
                    <div class="text-gray-600 text-sm lg:text-base">Star</div>
                </button>
                <button class="bg-[#acacac44] px-2  rounded-r-md text-gray-500">
                    <mark />
                </button>
            </div>
        </div>
        
    </div>

  </section>
</template>