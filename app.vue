<template>
  <Nav/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

onBeforeMount(async () => {
  await userStore.setUser();
});
</script>