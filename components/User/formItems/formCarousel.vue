<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import birthDate from '@/components/User/formItems/birthDate.vue';
// import Username from '@/components/User/formItems/username.vue';
// const formsItems = [Username, birthDate] 
</script>

<template>
    <Carousel class="relative  max-w-sm lg:max-w-md p-3 border"  >
      <CarouselContent >
        <CarouselItem class="w-full flex justify-center flex-col items-center"  >
            <Username />
            <div>1/3</div>
        </CarouselItem>
        <CarouselItem class="w-full flex justify-center flex-col items-center">
            <birthDate />
            <div>2/3</div>
        </CarouselItem>
        <CarouselItem class="w-full flex justify-center flex-col items-center">... <div>3/3</div></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </template>

  <!-- <Carousel
    class="relative w-full max-w-sm lg:max-w-lg xl:max-w-2xl"
    :plugins="[plugin]"
     @mouseenter="plugin.stop"
     @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];"
    :opts="{
      align: 'start',
    }"
    
  >
    <CarouselContent class="-ml-1 w-full">
      <CarouselItem v-for="(_, index) in 10" :key="index" class="pl-1 md:basis-1/2 lg:basis-1/5 2xl:basis-1/6">
        <div class="p-1">
          <Card>
            <CardContent class="flex aspect-square items-center justify-center p-6">
              <span class="text-2xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template> -->