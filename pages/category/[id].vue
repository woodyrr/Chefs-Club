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

// const filteredIngredients = computed(() => {
//   const ingredients = [];
//   for (let index = 1; index <= 20; index++) {
//     const ingredient = food.value.meals[0]['strIngredient' + index];
//     const measure = food.value.meals[0]['strMeasure' + index];

//     if (ingredient && ingredient.length > 1 && measure) {
//       ingredients.push(`${measure} ${ingredient}`);
//     }
//   }
//   return ingredients;
// });


// onBeforeMount(async () => {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`);
//     const data = await response.json();
//     // console.log(data)
//     food.value = data;
    
// });
onBeforeMount(() => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.id}`)
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

<!-- <template>
    <main class=" w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10 bg-[#0E1325]">
        <section class=" flex flex-col gap-10">
            <div class="px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full">
               
                <router-link to = "/home" class="flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3">
                    
                    <div>Back to categoriessss</div>
                </router-link>
            </div>
            <div class="flex justify-center text-[35px] detailhead">
                {{route.params.id }} meals
            </div>
            <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium">
                <div v-for="item in food">
                    <router-link  :id="item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]  ">
                        <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                        <div>{{ item.strMeal }}</div>
                    </router-link>
                </div>
            </section>
            
            
        </section>
    </main>
</template> -->

<template>
    <!-- <section class="grid md:grid-cols-3 xl:grid-cols-5 gap-8 text-[16px] text-[#E5E7EB] font-medium">
        <Dialog v-for="(item, index) in food" :key="index">
        <DialogTrigger as-child class="border">
            <Button variant="outline" :style="{ backgroundImage: `url(${item.strMealThumb})`, backgroundSize: 'cover', backgroundPosition: 'center' }" class="w-full sm:h-[450px] 2xl:h-[100px] rounded-lg flex items-center justify-center">
                <div class="bg-black bg-opacity-50 text-white p-2 rounded">
                    {{ item.strMeal }}
                </div>
            </Button>
        </DialogTrigger>
        <DialogContent class="max-w-[99%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[70%] h-[98%] sm:h-[97%] xl:h-[94%] ">
            <FoodDetails :meal="item"/>
        </DialogContent>
        </Dialog>
    </section> -->

    <!-- <section class="grid md:grid-cols-3 xl:grid-cols-5 gap-8 text-[16px] text-[#E5E7EB] font-medium p-[1%]">
        
        <Dialog v-for="(item, index) in food" :key="index">
            <DialogTrigger as-child class="border">
            <Button
                variant="outline"
                :style="{ backgroundImage: `url(${item.strMealThumb})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
                class="w-full sm:h-[450px] 2xl:h-[500px] rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg relative"
            >
                <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span class="text-white text-lg font-bold p-4">
                    {{ item.strMeal }}
                </span>
                </div>
            </Button>
            </DialogTrigger>
            
                <DialogContent class="max-w-[99%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[70%] h-[98%] sm:h-[97%] xl:h-[94%] transition-all duration-300 transform origin-bottom sm:origin-center">
                    <FoodDetails :meal="item" />
                </DialogContent>
            
            
        </Dialog>
    </section> -->

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