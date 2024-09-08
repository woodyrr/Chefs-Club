<!-- fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${route.params.id}`) -->

<script setup>
import {ref, onBeforeMount, computed} from 'vue'
import { useRoute } from 'vue-router';
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import FoodDetails from '~/components/foodDetails.vue';

const food = ref({});
const route = useRoute();

onBeforeMount(() => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${route.params.id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      food.value = data.meals;
    //   console.log(food.value)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});


</script>

<template>

    <section class="grid md:grid-cols-3 xl:grid-cols-5 gap-8 text-[16px] text-[#E5E7EB] font-medium p-[1%]">
        <!-- Dialog-Style Display -->
        <Dialog v-for="(item, index) in food" :key="index">
            <DialogTrigger as-child class="border">
            <!-- Button with Background Image and Hover Effects -->
            <Button
                variant="outline"
                :style="{ backgroundImage: `url(${item.strMealThumb})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
                class="w-full sm:h-[450px] 2xl:h-[500px] rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg relative"
            >
                <!-- Dark Overlay with Text on Hover -->
                <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span class="text-white text-lg font-bold p-4">
                    {{ item.strMeal }}
                </span>
                </div>
            </Button>
            </DialogTrigger>

            <!-- Dialog Content with Transition -->
            <DialogContent class="max-w-[99%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[70%] h-[98%] sm:h-[97%] xl:h-[94%] transition-all duration-300 transform origin-bottom sm:origin-center">
            <!-- Meal Details Component -->
            <FoodDetails :meal="item" />
            </DialogContent>
        </Dialog>
    </section>



  </template>

<style scoped>
img{
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
    
}
.detailhead{
  font-family: 'Playfair Display', serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
/* .instruct{
    white-space: pre;
} */

</style>