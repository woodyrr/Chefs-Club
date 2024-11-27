<script setup>
import { Button } from '@/components/ui/button'
import { ref, onMounted } from 'vue';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useFetch } from '#app'
import { ArrowBigDown, ArrowDownNarrowWide, ChefHat, ChevronDown, Clock, CookingPot, LoaderCircle, MoveDown, Star, Stars, Youtube } from 'lucide-vue-next';

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
  <section class="p-[3%] w-full gap-8 text-[16px] text-[#E5E7EB] font-medium sm:p-1">
    <!-- Looping through each meal -->
    <div v-if="meals.length === 0" class="flex items-center justify-center w-full  text-lg">
      <LoaderCircle class="animate-spin" /> Loading meals...
    </div>
    

    <div class="flex flex-col w-full gap-5">
        <div class="flex flex-col-reverse gap-2 md:flex-row justify-between w-full ">
            
            <input type="text" class=" px-2 p-2 border border-gray-400 rounded-lg basis-2/3 text-black text-sm placeholder-gray-500" placeholder="Find a recipe">
            <div class="flex ">
                <button class="bg-green-700 hover:bg-green-600 flex gap-1 p-2 rounded-lg px-3 text-sm text-white w-full justify-center items-center text-center" >
                    <CookingPot class="w-4 h-4"  />
                    <div>New</div>
                </button>
            </div>
        </div>


        <div v-for="(mealEntry, index) in meals" :key="index" class="w-full">
            <div class="flex w-full justify-between border py-8 border-x-0">
                <div class="text-black text-lg font-semibold hover:underline underline-offset-4">
                    {{ mealEntry.meal.name }}
                </div>
                <div class="flex ">
                    <button class="flex items-center bg-[#acacac44]  gap-2 px-4 py-1 rounded-md rounded-r-none border border-r-1 border-y-0 border-l-0 border-gray-400">
                        <Stars class="text-gray-500 w-4 lg:w-5" />
                        <div class="text-gray-600 text-sm lg:text-base">Star</div>
                    </button>
                    <button class="bg-[#acacac44] px-2  rounded-r-md text-gray-500">
                        <ChevronDown />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
    

  </section>
</template>