<script setup>
import { useFetch } from '#app'

const { data: meals } = await useFetch('/api/meals')
</script>

<template>
  <div>
    <h1>Meals List</h1>
    <div v-for="meal in meals" :key="meal.name">
      <div >{{ meal.name }} - {{ meal.category }}</div>
      <div>{{ meal.description }}</div>
      <div>{{ meal.ingredients.pasta }}</div>
    </div>
  </div>
</template>


