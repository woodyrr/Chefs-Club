<!-- <script setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useFetch } from '#app'
import { LoaderCircle } from 'lucide-vue-next';

const { data: meals } = await useFetch('/api/meals')
</script> -->

<!-- <template>
  <section class="grid md:grid-cols-3 xl:grid-cols-5 gap-8 text-[16px] text-[#E5E7EB] font-medium p-[1%]">
        
        <Dialog v-for="(item, index) in meals" :key="index">
            <DialogTrigger as-child class="border">
            
            <Button
                variant="outline"
                :style="{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
                class="w-full sm:h-[450px] 2xl:h-[500px] rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg relative"
            >
                
                <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span class="text-white text-lg font-bold p-4">
                    {{ item.name }}
                </span>
                </div>
            </Button>
            </DialogTrigger>
            
            <DialogContent class="max-w-[99%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[70%] h-[98%] sm:h-[97%] xl:h-[94%] transition-all duration-300 transform origin-bottom sm:origin-center">
            
              <div v-if="item" class="flex flex-col gap-5 justify-center items-center">
                <h2 class="text-[26px] md:text-[45px] detailhead">{{ item.name }}</h2>

                <p>{{ item.description }}</p>
                <div class="flex gap-3">
                      <router-link :to="{ name: 'category-id', params: { id: item.category } }" class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
                          <div>category:</div>
                          <div class="font-bold"> {{ item.category }}</div>
                      </router-link>
                      <router-link :to="{ name: 'nationality-id', params: { id: item.area } }"  class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
                          <div>Area:</div>
                          <div class="font-bold">{{ item.area }}</div>
                      </router-link>
                </div>
                <div class="flex flex-col gap-1">
                      <div class="flex gap-3 justify-start items-start">
                          <button class="bg-[#4E80EE] p-3 md:p-4 rounded-full"></button>
                          <h3 class="font-bold flex items-center text-[18px]">Instructions</h3>
                      </div>
                      <div  class="h-[220px] xl:h-[300px] overflow-y-scroll px-[14px] py-[6px]  md:px-[20px] md:py-[10px] bg-[#f9f9f9] border border-[#ddd] rounded-md font-serif">
                        <div v-for="(item,index) in item.preparations" :id="index">
                          <div class="leading-[1.6] font-[18px] text-[#333] flex flex-col gap-5 w-full">
                              <p className='mb-[1em] instruct whitespace-pre-line'>{{ index }} : {{ item }} </p>
                          </div>
                        </div>
                      </div>
                </div>
                
                
                  <div class="ingredients flex flex-col gap-3 px-2 md:px-0 w-full">
                      <div class="flex gap-3">
                          <button class="bg-[#FEBD2E] p-3 md:p-4  rounded-full"></button>
                          <h3 class="font-bold flex items-center text-[17px] md:text-[18px]">Ingredients</h3>
                      </div>
                      <div class="gap-1 xl:gap-3 text-sm md:text-[16px] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 place-content-center place-items-center ">
                          <div v-for="(ingredient, index) in item.ingredients" :key="index">
                              
                              <div class="flex gap-2 ">
                                  <div class="flex font-semibold" >
                                      {{ ingredient.quantity }}
                                      {{ ingredient.unit }}
                                  </div>
                                  <div>
                                      {{ ingredient.ingredient }}
                                      {{ index }}
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              
                  <div class="flex">
                      
                      <a :href="item.video" target="_blank" v-if="item.video" class="bg-green-100 p-3 rounded-lg  border border-green-200 flex gap-1 lg:gap-2">
                      Watch Video <Youtube class="animate-pulse text-green-900" />
                      </a>
                      <p class="flex gap-1" v-else>No Video <LoaderCircle class="animate-spin" /></p>
                  </div>
                </div>
                <div v-else class="flex items-center justify-center text-2xl">
                  Loading...<LoaderCircle class="animate-spin" />
                </div>
            </DialogContent>
        </Dialog>
    </section>
</template> -->


<script setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useFetch } from '#app'
import { ChefHat, Clock, Gauge, LoaderCircle, Youtube } from 'lucide-vue-next';

const { data: meals } = await useFetch('/api/meals')
</script>

<template>
  <section class="p-[3%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 text-[16px] text-[#E5E7EB] font-medium sm:p-[1%]">
    <Dialog v-for="(item, index) in meals" :key="index" >
      <DialogTrigger as-child class="border group">
        
        
        <Button
          variant="outline"
          :style="{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
          class="w-full  h-[300px] sm:h-[450px] 2xl:h-[450px] rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg relative overflow-hidden"
        >
        
          
          <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span class="text-white text-lg font-bold p-4">
              {{ item.name }}
            </span>
          </div>

          
          <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-100 flex flex-col gap-1 p-2 transform transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
            <!-- Chef section -->
              <div class="flex gap-1 items-center justify-center">
                <ChefHat /> {{ item.chef }} 
              </div>

              <div 
                
                class="flex gap-1 items-center justify-center"
              >
                <Clock :style="{ color: item.time.max <= 30 ? '#28a745' : item.time.max <= 45 ? '#ffc107' : '#dc3545' }"  /> {{ item.time.min }} - {{ item.time.max }} mins
              </div>

              <!-- Difficulty section with dynamic color styling -->
              <div 
               
                class="flex gap-1 items-center justify-center"
              >
                Difficulty: <span :style="{ color: item.dificulty === 'easy' ? 'green' : item.dificulty === 'medium' ? 'orange' : 'red' }">{{ item.dificulty }}</span>
              </div>

              
          </div>
          
        </Button>
      </DialogTrigger>

      <DialogContent class="max-w-[99%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[70%] h-[98%] sm:h-[97%] xl:h-[94%] transition-all duration-300 transform origin-bottom sm:origin-center">
            
          <div v-if="item" class="flex flex-col gap-6 2xl:gap-5 justify-center items-center md:px-[3%] ">
              <h2 class="text-[26px] md:text-[45px] detailhead">{{ item.name }}</h2>

              <p class="text-sm lg:text-base">{{ item.description }}</p>
              <div class="flex gap-3">
                    <router-link :to="{ name: 'category-id', params: { id: item.category } }" class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
                        <div>category:</div>
                        <div class="font-bold"> {{ item.category }}</div>
                    </router-link>
                    <router-link :to="{ name: 'nationality-id', params: { id: item.area } }"  class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
                        <div>Area:</div>
                        <div class="font-bold">{{ item.area }}</div>
                    </router-link>
              </div>
              <div class="flex flex-col gap-1 w-full">
                    <div class="flex gap-3 justify-start items-start">
                        <button class="bg-[#4E80EE] p-2 md:p-3 rounded-full"></button>
                        <h3 class="font-bold flex items-center text-[18px]">Instructions</h3>
                    </div>
                    <div  class="h-[240px] xl:h-[300px] overflow-y-scroll px-[14px] py-[6px]  md:px-[20px] md:py-[10px] bg-[#f9f9f9] border border-[#ddd] rounded-md font-serif">
                      <div v-for="(item,index) in item.preparations" :id="index">
                        <div class="leading-[1.6] font-[18px] text-[#333] flex flex-col gap-5 w-full">
                            <p className='mb-[1em] instruct whitespace-pre-line'>{{ index }} : {{ item }} </p>
                        </div>
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
                        <div v-for="(ingredient, index) in item.ingredients" :key="index">
                            
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
                        <div class="flex gap-1" v-for="(item, index) in item.seasoning">
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
          
              <div class="flex">
                  
                  <a :href="item.video" target="_blank" v-if="item.video" class="bg-green-100 p-3 rounded-lg  border border-green-200 flex gap-1 lg:gap-2">
                  Watch Video <Youtube class="animate-pulse text-green-900" />
                  </a>
                  <p class="flex gap-1" v-else>No Video <LoaderCircle class="animate-spin" /></p>
              </div>
            </div>
            <div v-else class="flex items-center justify-center text-2xl">
              Loading...<LoaderCircle class="animate-spin" />
            </div>
        </DialogContent>
    </Dialog>
  </section>
</template>





