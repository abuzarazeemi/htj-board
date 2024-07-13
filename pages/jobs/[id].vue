<template>
    <!-- Blog Article -->
    <div v-if="job" class="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div class="flex relative w-full">

    
        <!-- Content -->
        <div class="relative space-y-5 md:space-y-8 w-10/12 pr-12">
          <div class="space-y-3">
            <div class="flex">
              <img class="group-hover:scale-105 transition-transform  w-32
              duration-500 ease-in-out size-full  top-0 start-0 object-cover rounded-lg"
               :src="job.companyLogo" alt="Image Description">
              <div class="ml-4">
                <h1 class="text-3xl font-bold md:text-3xl  dark:text-white">{{job.positionName}}</h1>
                <h2 class="text-2xl text-gray-800 dark:text-neutral-200">{{job.companyName}}</h2>
                <h2 class="text-md text-gray-800 dark:text-neutral-200">{{job.companyType}}</h2>
                <h3 v-if="job.minSalary && job.maxSalary" class="text-xl text-gray-800 dark:text-neutral-200">{{job.minSalary}} - {{ job.maxSalary }}$</h3>
               
                
          
              </div>
            </div>
            <div class="flex ">
             
                <h3 class="text-xl text-gray-800 dark:text-neutral-200">Posted: 30 days ago</h3>&nbsp;
                <h3 class="text-xl text-gray-800 dark:text-neutral-200">Position Level:{{job.experience}}</h3>&nbsp;
                <h3 class="text-xl text-gray-800 dark:text-neutral-200">Department:{{job.department}}</h3>&nbsp;
                <h3 class="text-xl text-gray-800 dark:text-neutral-200">Commitment:{{job.employment}}</h3>&nbsp;
              </div>
  
          
          </div>
          <p class="text-md text-black dark:text-neutral-400 text-justify">
            {{job.desc}}
          </p>
     
        </div>
        <!-- End Content -->
         <div class=" relative w-2/12">
          <a :href="applyURL" target="_blank" class="w-full py-3 px-4 inline-flex justify-center items-center
           gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lead-red
            text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
           Apply 
           

         </a>
         </div>
      </div>
    </div>
    <LoadingSpinner v-else/>
    </template>
    
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import { useSupabaseClient } from '#imports';
    const supabase = useSupabaseClient();

    const route = useRoute();
    const page = route.params.id
    
      const job = ref(null)
    
      const getContent = async() =>{
   const { data } = await supabase.from('jobs').select().eq('id', page)
   job.value = data[0]
      }
    
    onMounted(() => {
        getContent()
    })
    </script>