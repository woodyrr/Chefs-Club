<script setup>
import { LoaderCircle, Youtube } from 'lucide-vue-next';
import {ref, computed} from 'vue'
import { useRoute, RouterLink } from 'vue-router';
const food = ref({});
const route = useRoute();


const props = defineProps({
  meal: Object,  // Accept meal data as a prop
});



watch(
  () => props.meal,
  async (newMeal) => {
    if (newMeal && newMeal.idMeal) {
      // Fetch meal details using idMeal from props
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${newMeal.idMeal}`
        );
        const data = await response.json();
        food.value = data
        // console.log(food.value)
        
      } catch (error) {
        console.error('Error fetching meal data:', error);
      }
    }
  },
  { immediate: true } // This ensures it runs immediately if `props.meal` is already available
);

// const filteredIngredients = () => {
//   const ingredients = [];
//   if (food.value.meals && food.value.meals.length > 0) {
//     const meal = food.value.meals[0]; // Access the first meal in the meals array
//     for (let i = 1; i <= 20; i++) {
//       const ingredient = meal[`strIngredient${i}`];
//       const measure = meal[`strMeasure${i}`];
//       if (ingredient && ingredient.trim() && measure && measure.trim()) {
//         ingredients.push(`${measure} ${ingredient}`);
//       }
//     }
//   }
//   return ingredients;
// };

const filteredIngredients = () => {
  const ingredients = [];
  if (food.value.meals && food.value.meals.length > 0) {
    const meal = food.value.meals[0]; // Access the first meal in the meals array
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() && measure && measure.trim()) {
        // Separate number from measure (e.g., '2 tblsp' -> '2' and 'tblsp')
        const [quantity, ...unit] = measure.split(' ');
        
        // Combine the unit (if any) and the ingredient name
        ingredients.push({
          quantity: quantity || '', // Handle empty quantity
          unit: unit.join(' ') || '', // Join unit parts if they exist
          ingredient: ingredient.trim() // Trim ingredient name
        });
      }
    }
  }
  return ingredients;
};

</script>

<template>
    
    <div v-if="food.meals && food.meals.length > 0" v-for=" food in food.meals" class="flex flex-col gap-5 justify-center items-center">
      <!-- <h2>{{ food.strMeal }}</h2> -->
      <!-- <img :src="food.strMealThumb" alt="Meal image" /> -->
      <h2 class="text-[26px] md:text-[45px] detailhead">{{ food.strMeal }}</h2>
       <div class="flex gap-3">
            <router-link to="" class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
                <div>category:</div>
                <div class="font-bold"> {{ food.strCategory }}</div>
            </router-link>
            <router-link to=""  class="flex bg-green-100 items-center md:px-4 px-2 py-1 rounded-full gap-1">
                <div>Area:</div>
                <div class="font-bold">{{ food.strArea }}</div>
            </router-link>
       </div>
       <div class="flex flex-col gap-1">
            <div class="flex gap-3 justify-start items-start">
                <button class="bg-[#4E80EE] p-3 md:p-4 rounded-full"></button>
                <h3 class="font-bold flex items-center text-[18px]">Instructions</h3>
            </div>
        <div class="h-[220px] xl:h-[300px] overflow-y-scroll px-[14px] py-[6px]  md:px-[20px] md:py-[10px] bg-[#f9f9f9] border border-[#ddd] rounded-md font-serif">
                
                <div class="leading-[1.6] font-[18px] text-[#333] flex flex-col gap-5 w-full">
                    <p className='mb-[1em] instruct whitespace-pre-line'>{{ food.strInstructions }} </p>
                </div>
            </div>
       </div>
       
      
        <div class="ingredients flex flex-col gap-3 px-2 md:px-0 w-full">
            <div class="flex gap-3">
                <button class="bg-[#FEBD2E] p-3 md:p-4  rounded-full"></button>
                <h3 class="font-bold flex items-center text-[17px] md:text-[18px]">Ingredients</h3>
            </div>
            <div class="gap-1 xl:gap-3 text-sm md:text-[16px] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 place-content-center place-items-center ">
                <div v-for="(ingredient, index) in filteredIngredients()" :key="index">
                    
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
    
        <!-- <div class="Instructions flex flex-col gap-5 px-2 md:px-0 pb-14">
            <div class="flex gap-4">
                <button class="bg-[#4E80EE] p-3 py-5 rounded-full"></button>
                <h3 class="font-bold flex items-center text-[18px]">Instructions</h3>
            </div>
            <p class="text-[17px] instruct whitespace-pre-line">
                {{ food.strInstructions }} 
            </p>
        </div> -->
        
    
        <div class="flex">
            <!-- <h3>Video</h3> -->
            <a :href="food.strYoutube" target="_blank" v-if="food.strYoutube" class="bg-green-100 p-3 rounded-lg  border border-green-200 flex gap-1 lg:gap-2">
            Watch Video <Youtube class="animate-pulse text-green-900" />
            </a>
            <p class="flex gap-1"v-else>No Video <LoaderCircle class="animate-spin" /></p>
        </div>
    </div>
    <div v-else class="flex items-center justify-center text-2xl">
        Loading...<LoaderCircle class="animate-spin" />
    </div>
  </template>



