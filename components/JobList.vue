<template>
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
       <button @click="openForm" class="bg-blue-200 rounded-2xl px-4 py-2">Set alert</button>
      <div v-if="jobsStore.$state.jobs" class="grid lg:grid-cols-1 lg:gap-y-6 gap-5">
        <!-- Card -->
        <NuxtLink  :to="`/jobs/${job.id}`" v-for="job in jobsStore.$state.jobs" :key="job.id" class="group py-5 px-5 rounded-xl bg-white overflow-hidden dark:bg-lead-navy" href="#">
          <div class="sm:flex">
            <div class="flex-shrink-0 relative rounded-xl my-auto overflow-hidden w-24 h-24">
              <NuxtImg class="group-hover:scale-105 t
              ransition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" :src="job.companyAvatar" :alt="job.companyName" />
            </div>
    
            <div class="grow   sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h2 class="text-3xl font-bold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                {{ job.positionName }}
              </h2>
              <h3 class="mt-2 text-gray-600 text-xl font-semibold dark:text-neutral-400">
                {{ job.companyName}}
              </h3>
         
            </div>
            <div class="flex-shrink-0 relative rounded-xl my-auto overflow-hidden ">
              <h2 v-if="job.minSalary && job.maxSalary" class="text-3xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                {{job.minSalary}} - {{job.maxSalary}} $
              </h2>
              <h2 v-else class="text-3xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Undisclose salary
              </h2>
              <div class="mt-3 text-gray-600 dark:text-neutral-400 flex justify-end">
                <span class="ml-1 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-600 text-white dark:bg-blue-500">Remote</span>
                <span class="ml-1 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-600 text-white dark:bg-blue-500">tag</span>
              </div>
            </div>
    
          </div>
        </NuxtLink >
        <!-- End Card -->
    
       </div>
       <LoadingSpinner v-else/>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
    </template>
    
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import { useAllJobsStore } from '@/store/jobs'
    
    const jobsStore = useAllJobsStore();
    console.log(jobsStore.$state.jobs)
    onMounted(() => {
      jobsStore.filterJobs(null,'','',''); // Pobiera wszystkie prace przy inicjalizacji
    });

    const openForm = () => {
  if (typeof window !== 'undefined') {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(['openForm', 'Yz3kB9']);
  }
};
    </script>