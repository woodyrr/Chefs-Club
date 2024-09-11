<template>
    <!-- <div> -->
        <!-- <Navigation /> -->
        <section class="flex flex-col gap-4 w-full">
            <options2 />
            <options />
            <!-- <p class="text-blue-600">{{ user.current.value }}sssss</p> -->
            <!-- <p class="text-blue-600">{{ profile.current.value[0].lastName }}</p> -->
            <!-- v-if="profile.current.value[0].lastName " -->
            <!-- {{ profile.current.value }} -->
            <!-- <div v-if="profile.current.value[0].userId == user.current.value.userId">
                {{ profile.current.value.userId }}
            </div> -->
            <!-- <div v-if="update.recent.value">
                <div v-for="items in update.recent.value">
                    <div v-if="items.userId == user.current.value.userId">
                        {{ items.userId }}
                    </div>
                    
                    
                </div>
            </div> -->
            
            <!-- {{ update.current.value }} -->
            <!-- <p>{{ profile.current }}</p> -->

            <!-- <div v-for="items in update.current.value">
                <div v-if="items.userId == user.current.value.userId">
                    {{ items.userId }}
                </div>
            </div> -->
            <!-- <div ></div>
            {{ update.recent.value }} -->
            <!-- {{ update.recent }} -->
        </section>
         
    <!-- </div> -->
</template>

<script setup>
import Navigation from '~/components/navigation.vue';
import options from '~/components/options.vue';
import option2 from '~/components/options2.vue';
import {onMounted} from 'vue';
import { useUserSession } from '~/composables/profiles/useUserSession';
import { useProfiles } from '~/composables/profiles/useProfiles';
import { updateProfiles } from '~/composables/profiles/updateProfiles';
const user = useUserSession()
const profile = useProfiles()
const update = updateProfiles()

onMounted(async () => {
  await update.fetch();
});
</script>

