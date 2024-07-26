<script setup>
import { ref, onMounted, computed } from 'vue';
import { Bell, CircleUser, Home, Menu, Search, Drumstick, Star,  DollarSign, HistoryIcon } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import createProfile from './User/createProfile/createProfile.vue';
import { useUserSession } from '@/composables/useUserSession';
import { updateProfiles } from '@/composables/updateProfiles';
import { useProfiles } from '@/composables/useProfiles';

const user = useUserSession();
const profile = useProfiles();
const update = updateProfiles();
const loggedInUser = ref(null);

onMounted(async () => {
  await update.fetch();
});

const userProfile = computed(() => {
  return update.recent.value?.find(profile => profile.userId === user.current.value?.userId);
});
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] no-scrollbar max-xl:max-h-screen max-xl:overflow-y-scroll">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold text-black">
            <Home class="h-6 w-6"/>
            <span class="">ChefsClub</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8 text-black">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <NuxtLink to="" class="flex items-center gap-3 bg-muted rounded-lg px-3 py-3 text-primary  transition-all hover:text-primary">
              <Home class="h-4 w-4" />
              My Events
            </NuxtLink>
          </nav>
        </div>
        <div class="mt-auto p-4">
          <Card>
            <CardHeader>
              <CardTitle class="text-base lg:text-lg">GAMBLING PROBLEM?</CardTitle>
              <CardDescription>Call or text: 1-800-GAMBLER</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" class="w-full">Upgrade</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <div class="flex flex-col text-black">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-14">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col px-[6%]">
            <nav class="grid gap-2 text-lg font-medium text-black">
              <NuxtLink to="/history" class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
                <Home class="h-5 w-5" />
                My Events
              </NuxtLink>
              <a
                href="#"
                class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
              <DollarSign class="h-5 w-5" />
                Messages
              </a>
              <a
              href="#"
              class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <HistoryIcon class="h-4 w-4" />
                Favorites
              </a>
            </nav>
            <div class="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>GAMBLING PROBLEM?</CardTitle>
                  <CardDescription>Call or text: 1-800-GAMBLER</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" class="w-full">Upgrade</Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
        <div class="hidden md:block w-full flex-1">
          <form>
            <div class="relative">
              <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..." class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
            </div>
          </form>
        </div>
        <div v-if="!userProfile">
          <createProfile />
        </div>
        <div v-else class="flex items-center">
          <div v-for="item in update.recent.value" :key="item.$id">
            <div v-if="item.userId === user.current.value.userId">
              Hey {{ item.firstName }}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="secondary" size="icon" class="rounded-full">
                <CircleUser class="h-5 w-5 text-blue-500" />
                <span class="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="user.logout()">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
