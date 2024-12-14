<script setup>
import { ref, onMounted, computed } from 'vue';
import {Home, Menu, Search, Star,  DollarSign, HistoryIcon, PanelsTopLeft, User, SmilePlus, Heart, LogOut, Settings, BadgeHelp, Bell, ChefHat, CookingPot, CirclePlus, PackageSearch, Disc, BookOpenText, MessagesSquare, ShoppingBasket, StarIcon, Stars, CircleEllipsis, Ellipsis } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import createProfile from './User/createProfile/createProfile.vue';
import Dialog from './ui/dialog/Dialog.vue';
import DialogTrigger from './ui/dialog/DialogTrigger.vue';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';



const client = useSupabaseClient()
const user = useSupabaseUser()
const avatar_path = ref(`https://robohash.org/${user.email}.png`)
const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}

const userName = computed(() => user.value?.user_metadata?.user_name); 
const username = userName.value;
// const userName = user.value.user_metadata.user_name
const userAvatar = user.value.user_metadata.avatar_url
const name = user.value.user_metadata.name
// const user = useSupabaseUser()
// console.log( user.value)
// console.log(user.value.user_metadata.name)
// avatar-URL, user_name
// const user = useSupabaseUser()
// console.log(user.value)

</script>

<template>
  <div class="grid min-h-screen w-full ">
    <!-- md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] max-xl:max-h-screen max-xl:overflow-y-scroll -->
    <!-- <div class="hidden border-r bg-muted/40 md:flex">

      
    </div> -->

    <!-- end here -->
    <div class="flex flex-col text-black w-full">
      <header class="flex flex-col justify-between h-[15%] sm:h-[12%] md:h-[11%] lg:h-[14%]  px-2 border-b bg-muted/65 sm:px-4  lg:px-4 w-full">
        <section class="flex justify-between pt-2 gap-4 w-full">
          <div class="flex items-center gap-3">
            <Sheet class="">

              <SheetTrigger as-child>
                <Button
                  variant="outline"
                  size="icon"
                  class="shrink-0"
                >
                  <Menu class="h-6 w-6" />
                  <span class="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" class="flex flex-col w-[330px] rounded-r-xl ">

                <nav class="grid gap-2 text-lg font-medium text-black">
                  <div class="pb-1">
                    <ChefHat class="h-10 w-10 xl:h-12 xl:w-12  bg-black p-1 rounded-full text-white" />
                  </div>
                  
                  <NuxtLink
                  to="/"
                  class="duration-150 hover:bg-gray-200 flex items-center gap-2 rounded-lg p-2 text-lg text-muted-foreground transition-all hover:text-primary"
                  >
                    <Home class="h-5 w-5 md:h-5 md:w-5" />
                  Home
                  </NuxtLink>
                  
                  <NuxtLink to="explore" class="duration-150 hover:bg-gray-200 flex items-center gap-2 rounded-lg p-2 text-lg text-muted-foreground transition-all hover:text-primary">
                    <Disc class="h-5 w-5 md:h-5 md:w-5" />
                    
                    Suggestions
                  </NuxtLink>

                  <NuxtLink to="/menu" class="duration-150 hover:bg-gray-200 flex items-center gap-2 rounded-lg p-2 text-lg text-muted-foreground transition-all hover:text-primary">
                    <BookOpenText class="h-5 w-5 md:h-5 md:w-5" />
                  
                    Menu
                  </NuxtLink>
                  
                  <NuxtLink to="/discussions" class="duration-150 hover:bg-gray-200 flex items-center gap-2 rounded-lg p-2 text-lg text-muted-foreground transition-all hover:text-primary">
                    <MessagesSquare class="h-5 w-5 md:h-5 md:w-5" />
                    Discussions
                  </NuxtLink>

                  <div class="border">

                  </div>
                  
                  <NuxtLink to="/explore" class="duration-150 hover:bg-gray-200 flex items-center gap-2 rounded-lg p-2 text-lg text-muted-foreground transition-all hover:text-primary">
                    <PackageSearch class="h-5 w-5 md:h-5 md:w-5" />
                    Explore
                  </NuxtLink>

                  <!-- <FindLocalChef />
                  <PresetShare /> -->

                </nav>

                <div class="mt-auto w-full">
                  
                  
                </div>
                <PresetShare class="mt-auto w-full" />
              </SheetContent>
            </Sheet>
            <NuxtLink :to="`/${userName}`" class="flex items-center gap-1">
              <ChefHat class="h-8 w-8 xl:h-10 xl:w-10  bg-black p-1 rounded-full text-white" />
              <div class="text-gray-800 font-bold text-sm">{{ userName }}</div>
            </NuxtLink>
          </div>
            <!-- <div>

            </div> -->
            <!-- <div class=" xl:w-full flex-1  ">
              <form>
                <div class="relative">
                  <Search class="absolute left-2.5 top-3 h-4 w-5  text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    class="appearance-none bg-background  pl-8 shadow-none w-1/3"
                  />
                </div>
              </form>
            </div> -->
            

            <!-- <div v-if="user">
            <createProfile />
            </div> -->
            <div class="flex items-center gap-2 lg:gap-3">
              <Dialog>
                <DialogTrigger as-child>
                  <button variant="outline" class="bg-white p-2 border rounded-md">
                    <Search class="text-muted-foreground text-sm w-5 h-5" />
                  </button>
                 
                </DialogTrigger>
                <DialogContent class=" max-w-[90%] md:max-w-[60%]">
                  <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription>
                      search here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div class=" w-full  ">
                    <form class="w-full">
                      <div class="relative">
                        <Search class="absolute left-2.5 top-3 h-4 w-5  text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search products..."
                          class="appearance-none bg-background  pl-8 shadow-none w-full"
                        />
                      </div>
                    </form>
                  </div>
                  <DialogFooter>
                    <Button type="submit">
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>


              <Dialog class="">
                <DialogTrigger as-child>
                  <button variant="outline" class="bg-white p-2 border rounded-md hidden md:block">
                    <CirclePlus class="text-muted-foreground text-sm w-5 h-5" />
                  </button>
                </DialogTrigger>
              </Dialog>



              <Dialog>
                <DialogTrigger as-child>
                  <button variant="outline" class="bg-white p-2 border rounded-md">
                    <Bell class="text-muted-foreground text-sm w-5 h-5" />
                  </button>
                </DialogTrigger>
              </Dialog>


      

              <Sheet class="">
                <SheetTrigger as-child>
                  <Button variant="none"  class="bg-clear hover:bg-clear flex gap-1 p-0">
                    <img :src="avatar_path" alt="" srcset="" class="h-10 w-10 md:h-10 md:w-10 rounded-full border border-green-200 ">
                  </Button>
                </SheetTrigger>
                <SheetContent class="w-[320px] md:w-[38%] flex flex-col gap-4 rounded-l-xl">
                  <SheetHeader>
                    <SheetTitle class="flex gap-1 items-center">
                      
                      <img :src="avatar_path" alt="" srcset="" class="h-8 w-8 md:h-10 md:w-10 rounded-full border border-green-200">
                      <div class="flex flex-col text-gray-600 text-left">
                        <div class="text-gray-800 text-sm">{{ userName }}</div>
                        <div class="text-sm text-gray-500">{{ name }}</div>
                      </div>
                      
                    </SheetTitle>
                    <SheetDescription class="flex flex-col gap-2 pt-2">
                      <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg text-gray-700">
                        <SmilePlus class="w-4 h-4" />
                        Set status</button>
                      <div class="border"></div>
                    </SheetDescription>
                  </SheetHeader>
                  <div class="text-gray-700 text-[14px] flex flex-col gap-2">
                    
                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                      <User class="w-4 h-4" />
                      Your profile
                    </button>

                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                      <CookingPot class="h-4 w-4 "  />
                      Your recipes
                    </button>

                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                      <Star class="w-4 h-4" />
                      Your stars
                    </button>

                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                      <Heart class="w-4 h-4" />
                      Your sponsors
                    </button>

                    <div class="border"></div>

                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg md:hidden">
                      <CirclePlus class="h-4 w-4 "  />
                      
                      Create New
                    </button>
                    
                    <div class="border"></div>
                    
                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                      <BadgeHelp class="w-4 h-4" />
                      Help
                    </button>
                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                      <Settings class="w-4 h-4" />
                      Settings
                    </button>

                  </div>
                  <SheetFooter class="">
                    <div class="flex flex-col gap-2 pt-2 w-full text-right">
                      <div class="border"></div>
                      <Button class="flex gap-2 items-center w-full bg-transparent duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg text-gray-700 text-[14px]" @click="logout">
                        <LogOut class="w-4 h-4" />
                        SignOut
                      </Button>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
        </section>
        


        <!-- heere -->
        <div default-value="overview" class="w-full flex justify-center items-end" orientation="vertical">
          
          <div class="w-full flex h-[70%] justify-around sm:justify-normal sm:gap-2 ">

            <section value="overview" class="bg-transparent border-b flex items-center gap-1 py-1 sm:p-3 ">
                <!-- <NuxtLink
                  to="/history"
                  class=""
                > -->
                <NuxtLink :to="`/account`" class="duration-150 hover:bg-gray-200 p-[6px] sm:py-1  sm:p-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                  <PanelsTopLeft class="h-4 w-4 sm:w-5 sm:h-5 text-gray-700"  />
                  Overview
                </NuxtLink>
                  
                <!-- </NuxtLink> -->
            </section>
            

            <section value="recipes" class="bg-transparent border-b flex items-center gap-1 py-1 sm:p-3  text-primary">
              <NuxtLink to="/recipes" class="duration-150 hover:bg-gray-200 p-[6px] sm:py-1  sm:px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                
                <CookingPot class="h-4 w-4 sm:w-5 sm:h-5 text-gray-700"  />
                
                Recipes
              </NuxtLink>
                
              
            </section>

            <!-- <section value="discover" class="bg-transparent border-b flex items-center gap-1 py-1 sm:p-3  text-primary">
              <NuxtLink to="/discover" class="duration-150 hover:bg-gray-200 p-[6px] sm:py-1  sm:px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                <PackageSearch class="h-3 w-3 sm:w-5 sm:h-5 text-gray-700" />
                Discover
              </NuxtLink>
                
              
            </section> -->
            <section value="Projects" class="bg-transparent border-b flex items-center gap-1 py-1 sm:p-3  text-primary">
              <NuxtLink to="/projects" class="duration-150 hover:bg-gray-200 p-[6px] sm:py-1  sm:px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                
                <BookOpenText class="h-4 w-4 sm:w-5 sm:h-5 text-gray-700" />
                projects
              </NuxtLink>
                
              
            </section>

            <section value="Ingredients" class="bg-transparent border-b sm:flex items-center gap-1 hidden py-1 sm:p-3  text-primary">
              <NuxtLink to="/ingredients" class="duration-150 hover:bg-gray-200 p-[6px] sm:py-1  sm:px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                <ShoppingBasket class="h-4 w-4 sm:w-5 sm:h-5 text-gray-700" />
                ingredients
              </NuxtLink>
                
              
            </section>

            <section value="stars" class="bg-transparent border-b md:flex items-center gap-1 py-1 sm:p-3 hidden   text-primary">
              <NuxtLink to="/stars" class="duration-150 hover:bg-gray-200 p-[6px] sm:py-1  sm:px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                
                <Stars class="h-4 w-4 sm:w-5 sm:h-5 text-gray-700" />
                  
                  Stars
              </NuxtLink>
                
              
            </section>


            <section class="bg-transparent border-b flex items-center gap-1 py-1 sm:p-3 md:hidden  text-primary ">
              <DropdownMenu>
                <DropdownMenuTrigger as-child  class="border">
                  <button  variant="outline" class="duration-150 border px-3 p-1 rounded hover:bg-gray-300">
                    <Ellipsis class="h-3 w-3 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56">
                  
                  <DropdownMenuItem
                    class="w-full"
                  >
                  <NuxtLink to="/stars" class="duration-150  hover:bg-gray-100  w-full flex items-center gap-1 rounded-xl  transition-all text-primary">
                    <Stars class="h-4 w-4 sm:w-5 sm:h-5 text-gray-700" />
                      
                      Stars
                  </NuxtLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    class="w-full"
                    
                  >
                  <NuxtLink to="/ingredients" class="duration-150 hover:bg-gray-100 w-full flex items-center gap-1 rounded-xl sm:hidden  transition-all text-primary">
                    <ShoppingBasket class="h-4 w-4 sm:w-5 sm:h-5 text-gray-700" />
                    ingredients
                  </NuxtLink>
                  </DropdownMenuItem>
                  
                </DropdownMenuContent>
              </DropdownMenu>
            </section>

          </div>
        </div>
      </header>
      <div class="w-full">
        <slot />
      </div>
      
    </div>
  </div>

</template>


