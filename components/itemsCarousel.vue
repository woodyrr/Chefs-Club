<!-- <script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { ref, onMounted } from 'vue';
import { LoaderCircle } from 'lucide-vue-next';
import Sheet from './ui/sheet/Sheet.vue';


const plugin = Autoplay({
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

// Define the type for your foodlist object
interface FoodList {
  categories: Category[];
}

// Initialize your reactive reference with an empty array for categories
const foodlist = ref<FoodList>({ categories: [] });

// Use the onMounted lifecycle hook to fetch data
onMounted(async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    foodlist.value = data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
});

const desc = ref(false)
</script>

<template>

  <Carousel
    class="relative w-full max-w-sm lg:max-w-lg xl:max-w-4xl"
    :plugins="[plugin]"
     @mouseenter="plugin.stop"
     @mouseleave="[plugin.reset(), plugin.play()];"
    :opts="{
      align: 'start',
    }"
    
  >
    <CarouselContent class="-ml-1 w-full">
      <CarouselItem v-for="(item, index) in foodlist.categories" :key="index"  class="pl-1 md:basis-1/2 lg:basis-1/5 2xl:basis-1/6">
        <div class="p-1">
          <Card >
            <CardContent class="flex aspect-square items-center justify-center p-1">
              <img v-if="item.strCategoryThumb":src="item.strCategoryThumb" alt="" srcset="" class="itemimg w-full rounded-full">
              <LoaderCircle class="animate-spin" v-else />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
 
</template>

<style>
.itemimg{
    image-rendering: -webkit-optimize-contrast;
}

</style> -->


<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { ref, onMounted } from 'vue';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { ArrowRight } from 'lucide-vue-next';

const plugin = Autoplay({
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface FoodList {
  categories: Category[];
}

const foodlist = ref<FoodList>({ categories: [] });

onMounted(async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    foodlist.value = data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
});
</script>

<!-- <template>
  <Carousel
    class="relative w-full max-w-sm lg:max-w-lg xl:max-w-4xl"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play()];"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1 w-full">
      <CarouselItem 
        v-for="(item, index) in foodlist.categories" 
        :key="index"  
        class="pl-1 md:basis-1/2 lg:basis-1/5 2xl:basis-1/5"
      >
        <div class="p-1">
          <Card>
            <Sheet>
              <SheetTrigger>
                <CardContent class="flex aspect-square items-center justify-center p-1">
                  <img 
                    v-if="item.strCategoryThumb" 
                    :src="item.strCategoryThumb" 
                    alt="Category Image" 
                    class="itemimg w-full rounded-full"
                  >
                  <LoaderCircle class="animate-spin" v-else />
                </CardContent>
              </SheetTrigger>

              <SheetContent class="h-full">
                <SheetHeader class="w-full h-full flex flex-col gap-2">
                  <SheetTitle class="xl:text-xl">{{ item.strCategory }}</SheetTitle>
                  <SheetDescription class="flex-col gap-10 md:text-[15px] 2xl:text-[16px]">
                    
                    <div class="instruct whitespace-pre-line  ">
                      {{ item.strCategoryDescription }}
                    </div>

                    
                  </SheetDescription>
                  <NuxtLink :to="{ name: 'category-id', params: { id: item.strCategory} }" class="bg-green-100 border border-green-200 p-3 rounded-lg text-center flex  justify-between font-semibold items-end">
                      Go to {{ item.strCategory }} dishes <ArrowRight class="animate-pulse" />
                  </NuxtLink>
                </SheetHeader>
              </SheetContent>
              <SheetFooter>

              </SheetFooter>
            </Sheet>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template> -->


<template>
  <Carousel
    class="relative w-full max-w-sm lg:max-w-lg xl:max-w-4xl"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play()];"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1 w-full">
      <CarouselItem
        v-for="(item, index) in foodlist.categories"
        :key="index"
        class="pl-1 basis-1/2 lg:basis-1/5 2xl:basis-1/5"
      >
        <div class="p-1 transition-transform transform hover:scale-105 hover:rotate-2 duration-500">
          <Card class="overflow-hidden rounded-lg shadow-sm transition-transform">
            <Sheet>
              <SheetTrigger>
                <CardContent class="flex aspect-square items-center justify-center p-1 relative group">
                  <!-- Image with zoom-in effect -->
                  <img
                    v-if="item.strCategoryThumb"
                    :src="item.strCategoryThumb"
                    alt="Category Image"
                    class="itemimg w-full rounded-full transition-transform transform group-hover:scale-110 duration-500"
                  >
                  <LoaderCircle class="animate-spin" v-else />

                  <!-- Overlay for title on hover -->
                  <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
                    <h3 class="text-white text-lg font-bold">{{ item.strCategory }}</h3>
                  </div>
                </CardContent>
              </SheetTrigger>

              <!-- Modal with smooth slide-in effect -->
              <SheetContent class="h-full animate-slide-in-left">
                <SheetHeader class="w-full h-full flex flex-col gap-2">
                  <SheetTitle class="text-xl">{{ item.strCategory }}</SheetTitle>
                  <SheetDescription class="flex-col gap-10 md:text-[15px] 2xl:text-[16px]">
                    <div class="instruct whitespace-pre-line">
                      {{ item.strCategoryDescription }}
                    </div>
                  </SheetDescription>
                  <!-- :to="/category/ + item.strCategory"
                  :to="{ name: 'nationality-id', params: { id: item.strArea } }" -->
                  <NuxtLink :to="{ name: 'category-id', params: { id: item.strCategory } }"
                    class="bg-green-100 border border-green-200 p-3 rounded-lg text-center flex justify-between font-semibold items-end hover:bg-green-200 transition-all duration-500">
                    Go to {{ item.strCategory }} dishes <ArrowRight class="animate-pulse" />
                  </NuxtLink>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

    <!-- Carousel navigation -->
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

<style scoped>
/* Add animation keyframes for sliding modal content */
@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.5s ease-out forwards;
}
</style>


