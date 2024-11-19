<template>
        <div class="w-full 2xl:px-[20%]" >
            <UserProfile />
        </div>
</template>

<script setup>
import options from '~/components/options.vue';
import {onMounted} from 'vue';
import { Edit2Icon } from 'lucide-vue-next';

const client = useSupabaseClient()
const user = useSupabaseUser()

const userName = user.value.user_metadata.user_name
const userAvatar = user.value.user_metadata.avatar_url
const name = user.value.user_metadata.name
</script>

