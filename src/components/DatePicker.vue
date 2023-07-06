<script lang="ts" setup>
import { ref } from 'vue';
import CheckIn from './CheckIn.vue';
import CheckOut from './CheckOut.vue';

const timeToday = ref(new Date());
const checkInDate = ref(timeToday.value);
</script>

<template>
  <div class="flex justify-between p-2 rounded shadow-lg w-80 bg-slate-800 text-slate-300 shadow-slate-950/95">
    <CheckIn @checkIn="(value) => (checkInDate = value)" />
    <CheckOut :checkInDate="checkInDate" />
  </div>
</template>
