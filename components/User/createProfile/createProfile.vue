<script setup lang="js">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import birthDate from '../formItems/birthDate.vue';


// const firstName = ref('');
// const lastName = ref('');
// const birthDateRef = ref(null);
// const isDialogOpen = ref(false);

// const handleAddToProfile = async () => {
//   // Collect data from birthDate component
//   const birthDateValues = birthDateRef.value.values;
//   if (firstName.value === '' || lastName.value === '' || !birthDateValues) {
//     console.log("First name, last name, or birthdate is missing.");
//     return;
//   } else {
//     const postIdeaData = {
//       userId: user.current.value?.userId,
//       email: user.current.value?.providerUid,
//       dob: birthDateValues.dob,
//       firstName: firstName.value,
//       lastName: lastName.value,
//     };

//     await profile.addUpdatedProfile(postIdeaData);

//     // Optionally reset form fields
//     firstName.value = '';
//     lastName.value = '';
//     birthDateRef.value.setFieldValue('dob', null);

//     // Close the dialog
//     isDialogOpen.value = false;
//   }
// }

// const handleSubmit = async () => {
//   // Trigger birthDate onSubmit to validate
//   if (!birthDateRef.value) {
//     console.log("Birthday is not entered");
//     return;
//   } else {
//     await birthDateRef.value.onSubmit();
//     // Add to profile if valid
//     await handleAddToProfile();
//     await update.fetch()
//   }
// }
</script>

<template>
  <Dialog >
    <DialogTrigger as-child>
      <Button variant="outline" @click="isDialogOpen = true">
        Edit Profile
      </Button>
    </DialogTrigger>
    <DialogContent v-model="isDialogOpen" class="sm:max-w-[525px] flex flex-col justify-center items-center">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <Carousel class="relative max-w-xs lg:max-w-sm">
        <CarouselContent class="flex">
          <CarouselItem class="w-full flex justify-center flex-col items-center">
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="firstName" class="text-right">
                  First Name
                </Label>
                <Input id="firstName" class="col-span-3" placeholder="Enter your first name" v-model="firstName" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="lastName" class="text-right">
                  Last Name
                </Label>
                <Input id="lastName" class="col-span-3" placeholder="Enter your last name" v-model="lastName" />
              </div>
            </div>
            <div>1/3</div>
          </CarouselItem>
          <CarouselItem class="w-full flex justify-center flex-col items-center">
            <birthDate ref="birthDateRef" />
            <div>2/3</div>
          </CarouselItem>
          <!-- <CarouselItem class="w-full flex justify-center flex-col items-center">... <div>3/3</div></CarouselItem> -->
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <DialogFooter>
        <Button type="button" @click="">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>


