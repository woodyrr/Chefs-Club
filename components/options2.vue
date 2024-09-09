<template>
    <div class="flex justify-between w-full gap-4 p-3 px-[3%]">
        <!-- <NavigationMenu /> -->
        <!-- <SearchingInput /> -->
         <!-- <div> -->
            <NavigationMenu />
         <!-- </div> -->
       
         <div class="hidden md:block w-full">
            <div class="relative">
               <div class="flex gap-1 items-center ">
                <PresetShare />
              </div>
            </div>
        </div>
        
        <FindLocalChef class="hidden md:block" />
        <!-- <ItemsCarousel /> -->
    </div>
</template>
<script setup>
const user = useUserSession()
</script>
