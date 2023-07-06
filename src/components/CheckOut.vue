<script lang="ts" setup>
import { addDays, format } from 'date-fns';
import { ref, watch } from 'vue';
import { useScreens } from 'vue-screen-utils';

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const columns = mapCurrent({ lg: 2 }, 1);

const checkInDate = defineProps({
  checkInDate: Date,
});
const addOneDay = (date: Date): Date => {
  return addDays(date, 1);
};

const newDate = addOneDay(checkInDate.checkInDate!);

const checkOutDate = ref(newDate);
const minimalCheckOutDate = ref(newDate);

watch(
  () => [checkInDate.checkInDate, checkOutDate.value],
  ([newCheckInDate, newCheckOutDate]) => {
    const newDate = addOneDay(checkInDate.checkInDate!);
    if (newCheckInDate! >= newCheckOutDate!) {
      minimalCheckOutDate.value = newDate;
      checkOutDate.value = newDate;
    } else {
      minimalCheckOutDate.value = newDate;
    }
  }
);

const formatDate = (date: Date) => {
  return format(date, 'eee, d MMM yyyy');
};
</script>

<template>
  <div class="flex-col">
    <h3>Check-Out</h3>
    <div class="row">
      <VDatePicker :columns="columns" is-dark="system" :min-date="minimalCheckOutDate" v-model="checkOutDate">
        <template #default="{ togglePopover }">
          <h3 class="flex justify-between rounded-md cursor-pointer" @click="togglePopover">
            <font-awesome-icon icon="fa-solid fa-calendar" size="lg" />
            <p class="ms-2">{{ formatDate(checkOutDate) }}</p>
          </h3>
        </template>
      </VDatePicker>
    </div>
  </div>
</template>
