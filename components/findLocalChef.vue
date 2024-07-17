<template>
    <section class="">
        <Dialog>
            <DialogTrigger as-child>
            <Button variant="outline" class="bg-green-400 text-black duration-200 hover:bg-gray-400 flex gap-1">
                <ChefHat class="h-4 w-4" />
                <div>Find Local chef</div>
            </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px] ">
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Give us a few details to see chefs, menus and prices. It will take 2min.
                </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                <Label for="name" class="text-right">
                    Name
                </Label>
                <Input id="name" value="Pedro Duarte" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                <Label for="username" class="text-right">
                    Username
                </Label>
                <Input id="username" value="@peduarte" class="col-span-3" />
                </div>
            </div>
            
            <DialogFooter>
                <Button type="submit">
                Save changes
                </Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>   
        
    </section>

    
</template>

<script setup>
 import { Button } from './ui/button'
import {ChefHat} from 'lucide-vue-next'
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
</script>

