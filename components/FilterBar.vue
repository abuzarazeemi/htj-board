<template>
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full   text-sm py-2.5 sm:py-4 dark:bg-black ">
      <nav class="max-w-7xl flex basis-full items-center w-full mx-auto " aria-label="Global">
        <div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div class="w-1/3">
            <label for="icon" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg class="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <input v-model="searchQuery" type="text"  id="icon" name="icon" class="py-3 pe-4 ps-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-200 dark:focus:ring-neutral-600" placeholder="Search">
            </div>
            
          </div>
          <select v-model="dept" class="py-3 px-4 pe-9 block w-1/4 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
      <option value="" >All</option>
      <option value="Email">Email</option>
      <option value="Influence">Influence</option>
      <option value="Content">Content</option>
      <option value="SEO">SEO</option>
      <option value="Printable">Printable</option>
      <option value="Ecommerce">Ecommerce</option>
      <option value="Other">Other</option>
    
    </select>
    <select v-model="exp" class="py-3 px-4 pe-9 block w-1/4 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
      <option value="">All</option>
      <option value="Intern">Intern</option>
      <option value="Specialist">Specialist</option>
      <option value="Manager">Manager</option>
      <option value="Director">Director</option>
    </select>
    
    <select  v-model="company" class="py-3 px-4 pe-9 block w-1/4 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
      <option value="">all</option>
      <option value="Agency">Agency</option>
      <option value="Services">Services</option>
      <option value="Product">Product</option>
    </select>
    
    <button @click="applyFilter" type="button" class=" w-1/6 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border bg-lead-red  text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
            Search in
          </button  >
        </div>
      </nav>
    </header>
    </template>
    
    <script>
    import { ref,computed, onMounted,watch } from 'vue'
    import { useAllJobsStore } from '@/store/jobs';
    
    export default {
      setup(){
        const dept = ref('')
        const exp = ref('')
        const company= ref('')
        const searchQuery = ref('')
        const jobsStore = useAllJobsStore();
    
        const applyFilter = () => {
          jobsStore.filterJobs(searchQuery.value,dept.value,exp.value,company.value);
        };
    
        return{dept, exp,searchQuery,company, applyFilter  }
      }
    }
    </script>