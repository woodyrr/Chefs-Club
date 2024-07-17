<script setup lang="ts">
  import { Bell, CircleUser, Coins, CreditCard, DollarSign, HistoryIcon, Home, LineChart, Menu, Package, Package2, PersonStanding,  ShoppingCart, Users, Drumstick, Star, Search, CookingPot} from 'lucide-vue-next'
  import { Input } from '@/components/ui/input'
</script>
<template>
    
    <!-- <div>
        <Search class="h-12 w-12 text-black border"/>
    </div> -->

    <div class="w-full">
        <form class="w-full">
            <div class="relative">
                <Search class="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Search products..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
            </div>
        </form>
    </div>
    
</template>


