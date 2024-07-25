<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const plugin = Autoplay({
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})
</script>

<template>
  <!-- <Carousel
    class="relative w-full max-w-xs"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];"
  >
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 5" :key="index">
        <div class="p-1">
          <Card>
            <CardContent class="flex aspect-square items-center justify-center p-6">
              <span class="text-4xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel> -->

  <Carousel
    class="relative w-full max-w-sm lg:max-w-lg xl:max-w-2xl"
    :plugins="[plugin]"
     @mouseenter="plugin.stop"
     @mouseleave="[plugin.reset(), plugin.play()];"
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
</template>