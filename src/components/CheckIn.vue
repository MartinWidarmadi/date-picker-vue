<script lang="ts" setup>
import { ref } from 'vue';
import { useScreens } from 'vue-screen-utils';
import { format } from 'date-fns';

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const columns = mapCurrent({ lg: 2 }, 1);

const timeToday = ref(new Date());

const emit = defineEmits(['checkIn']);

const checkIn = ref(timeToday.value);

const getCheckInValue = (value: Date) => {
  emit('checkIn', value);
};

const formatDate = (date: Date) => {
  return format(date, 'eee, d MMM yyyy');
};
</script>
<template>
  <div class="flex-col">
    <h3>Check-in</h3>
    <div class="row">
      <VDatePicker :columns="columns" is-dark="system" :min-date="timeToday" v-model="checkIn" @="getCheckInValue(checkIn)">
        <template #default="{ togglePopover }">
          <h3 class="flex justify-between rounded-md cursor-pointer" @click="togglePopover">
            <font-awesome-icon icon="fa-solid fa-calendar" size="lg" />
            <p class="ms-2">{{ formatDate(checkIn) }}</p>
          </h3>
        </template>
      </VDatePicker>
    </div>
  </div>
</template>
