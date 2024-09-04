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
        class="pl-1 md:basis-1/2 lg:basis-1/5 2xl:basis-1/6"
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

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{{ item.strCategory }}</SheetTitle>
                  <SheetDescription>
                    {{ item.strCategoryDescription }}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

