<script setup>
import { Button } from '@/components/ui/button'
import { ref, onMounted } from 'vue';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useFetch } from '#app'
import { ChefHat, Clock, LoaderCircle, Youtube } from 'lucide-vue-next';

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
  <section class="p-[3%] md:pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 text-[16px] text-[#E5E7EB] font-medium sm:p-[1%]">
    <!-- Looping through each meal -->
    <div v-if="meals.length === 0" class="flex items-center justify-center w-full  text-lg">
      <LoaderCircle class="animate-spin" /> Loading meals...
    </div>
    <Dialog v-for="(mealEntry, index) in meals" :key="index">
      <DialogTrigger as-child class="border group">
        <Button
          variant="outline"
          :style="{ backgroundImage: `url(${mealEntry.meal.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
          class="w-[235px] h-[200px] sm:h-[210px] lg:h-[220px] lg:w-[270px] 2xl:h-[200px] sm:w-[240px] 2xl:w-[350px] rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg relative overflow-hidden border border-x-1 border-gray-400"
        >
          <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex  justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span class="text-white text-lg font-bold p-4">
              {{ mealEntry.meal.name }}
            </span>
          </div>

          <!-- Overlay with meal details -->
          <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-100 flex flex-col gap-1 p-2 transform transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
            <div class="flex gap-1 items-center justify-center">
              <ChefHat /> {{ mealEntry.meal.cook }}
            </div>

            <div class="flex gap-1 items-center justify-center">
              <Clock :style="{ color: mealEntry.meal.time.max <= 30 ? '#28a745' : mealEntry.meal.time.max <= 45 ? '#ffc107' : '#dc3545' }" />
              {{ mealEntry.meal.time.min }} - {{ mealEntry.meal.time.max }} mins
            </div>

            <div class="flex gap-1 items-center justify-center">
              Difficulty: <span :style="{ color: mealEntry.meal.dificulty === 'easy' ? 'green' : mealEntry.meal.dificulty === 'medium' ? 'orange' : 'red' }">{{ mealEntry.meal.dificulty }}</span>
            </div>
          </div>
        </Button>
      </DialogTrigger>

      <!-- Dialog Content for each meal -->
      <DialogContent class="max-w-[99%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[70%] h-[98%] sm:h-[97%] xl:h-[94%] transition-all duration-300 transform origin-bottom sm:origin-center">
        <div v-if="mealEntry.meal" class="flex flex-col gap-6 2xl:gap-5 justify-center items-center md:px-[3%] ">
          <DialogTitle><h2 class="text-[26px] md:text-[45px] detailhead">{{ mealEntry.meal.name }}</h2></DialogTitle>
          <DialogDescription v-if="showmore"><div class="text-sm lg:text-base" >{{ mealEntry.meal.description }} <button @click="showmore = !showmore" class="">(less)</button></div></DialogDescription>
          <DialogDescription @click="showmore = !showmore" v-else><div class=" text-sm lg:text-base">{{  mealEntry.meal.description.slice(0, 150) }} <button @click="showmore != showmore" class="">(More)</button></div></DialogDescription>
          <!-- <DialogDescription><p class="text-sm lg:text-base">{{ mealEntry.meal.description }}</p></DialogDescription> -->

          <!-- Displaying Category and Area -->
          <div class="flex gap-3">
            <router-link :to="{ name: 'category-id', params: { id: mealEntry.meal.category } }" class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
              <div>Category:</div>
              <div class="font-bold">{{ mealEntry.meal.category }}</div>
            </router-link>
            <router-link :to="{ name: 'nationality-id', params: { id: mealEntry.meal.area } }" class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
              <div>Area:</div>
              <div class="font-bold">{{ mealEntry.meal.area }}</div>
            </router-link>
          </div>

          <!-- Instructions and Ingredients -->
          <div class="flex flex-col gap-1 w-full">
            <!-- Instructions -->
            <div class="h-[240px] xl:h-[300px] overflow-y-scroll px-[14px] py-[6px] md:px-[20px] md:py-[10px] bg-[#f9f9f9] border border-[#ddd] rounded-md font-serif">
              <div v-for="(prep, prepIndex) in mealEntry.meal.preparations" :key="prepIndex">
                <p class="mb-[1em] instruct whitespace-pre-line">{{ prepIndex }}: {{ prep }}</p>
              </div>
            </div>
          </div>


          <div class="flex w-full justify-around">

            <Popover>
              <PopoverTrigger>
                <div class="flex gap-3 justify-start items-start">
                    <button class="bg-[#FEBD2E] p-2 md:p-3  rounded-full"></button>
                    <h3 class="font-bold flex items-center text-[17px] md:text-[18px]">Ingredients</h3>
                </div>
              </PopoverTrigger>
              <PopoverContent class="bg-yellow-200 w-full">
                <div class="gap-1 xl:gap-3 text-sm md:text-[16px] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 place-content-center place-items-start ">
                    <div v-for="(ingredient, index) in mealEntry.meal.ingredients" :key="index">
                        
                        <div class="flex gap-2">
                          
                            <div class="flex font-semibold" >
                                {{ ingredient.quantity }}
                                {{ ingredient.unit }}
                                {{ ingredient.type }}
                            </div>
                            <div>
                                
                                {{ index }}
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
              </PopoverContent>
            </Popover>
              


              <Popover>
                <PopoverTrigger>
                  <div class="flex gap-3 justify-start items-start">
                    <button class="bg-[#93fe2e] p-2 md:p-3  rounded-full"></button>
                    <h3 class="font-bold flex items-center text-[17px] md:text-[18px]">Seasonings & Extras</h3>
                </div>
                  
                </PopoverTrigger>
                <PopoverContent class="bg-green-200 flex justify-center">
                  <div>
                    <div class="flex gap-1" v-for="(item, index) in mealEntry.meal.seasoning">
                      <div class="font-semibold">{{ item.quantity }}</div>
                      <div>{{ item.unit }}</div>
                      <div>{{ index }}</div>
                      
                      <div>({{ item.type }})</div>
                      
                      
                      
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <!-- <div>
                <div v-for="item in item.ingredients.seasoning">
                  {{ item.quantity }}
                  {{ item.unit }}
                  {{ item.type }}
                </div>
              </div> -->
          </div>

          <!-- Video Link -->
          <div class="flex">
            <a :href="mealEntry.meal.video" target="_blank" v-if="mealEntry.meal.video" class="bg-green-100 p-3 rounded-lg border border-green-200 flex gap-1 lg:gap-2">
              Watch Video <Youtube class="animate-pulse text-green-900" />
            </a>
            <p class="flex gap-1" v-else>No Video <LoaderCircle class="animate-spin" /></p>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else class="flex items-center justify-center text-2xl">
          Loading...<LoaderCircle class="animate-spin" />
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>



