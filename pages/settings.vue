<template>
    <!-- Card Section -->
    <div class="max-w-7xl  py-10   lg:py-14 mx-auto">
      <!-- Card -->
       <ClientOnly>
      <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
        <form>

          <!-- Section Company -->
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  dark:border-neutral-700 dark:first:border-transparent">
            <div class="sm:col-span-12">
              <h2 class="text-3xl font-semibold text-gray-800 dark:text-neutral-200">
                Settings
              </h2>
            </div>
    
    
            <div class="sm:col-span-6">
              <label for="af-submit-application-full-name" class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Company Name
              </label>
              <div class="sm:flex mt-2"> 
                <input required v-model="form.positionName" :disabled="loading" id="af-submit-application-full-name" type="text"  placeholder="e.g. Email Marketing Manager"
                class="py-2 px-3 pe-11 block w-full border-gray-200 border 
                shadow-sm -mt-px -ms-px first:rounded-t-lg 
                last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 
                sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none
                sm:last:rounded-e-lg text-xl relative focus:z-10 focus:border-
                blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
              dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
              dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                
              </div>
            </div>
    
            <div class="sm:col-span-6">
              <label for="af-submit-application-full-name" class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Company Type
              </label>
              <div class="sm:flex mt-2"> 
                <select required v-model="form.department" :disabled="loading" class="py-2 px-3 pe-9 block w-full border-gray-200 border shadow-sm text-xl rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option selected>Social Media</option>
                  <option>PR</option>
                  <option>eCommerce</option>
                  <option>SEO</option>
                  <option>Performance</option>
                  <option>Content</option>
                  <option>Graphic</option>
                  <option>Ads</option>
                  <option>Automation</option>
                  <option>Email Marketing</option>
                  <option>CRM</option>
                  <option>Other</option>
                </select>
                
              </div>
            </div>
    
            
          </div>
    
        
      
    
          <button @click="NewJob()"  :disabled="loading" type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lead-red text-white bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">
            <div v-if="loading" class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white rounded-full dark:text-white" role="status" aria-label="loading">
                  <span class="sr-only">Loading...</span>
                </div>
          
            <span v-else >Submit offer</span> 
          </button>
        </form>
      </div>
    </ClientOnly>
      <!-- End Card -->
    </div>
    <!-- End Card Section -->
          </template>
   <script setup>
   import { ref } from 'vue';
   import { useUserStore } from '@/store/user';

   import { useRouter } from 'vue-router';
  


   
   const router = useRouter()
   const loading = ref(false)

   const userStore = useUserStore();

   const form = ref({
       companyName: null,
       companyType:null,
       positionName: null,
       department:null,
       experience:null,
       employment:null,
       minSalary:null,
       maxSalary:null,
       desc:null,
       applyLink:null,
       
   })

definePageMeta({
    middleware: function(to, from) {
        const userStore = useUserStore();
        const user = userStore.$state.user;

        if (!user) {
            return navigateTo('/auth');
        }
    },
});

     const NewJob = async() =>{
        loading.value = true
         try {
             const { data, error } = await supabase.from('jobs').insert({
                 positionName:form.value.positionName,
                 companyName:form.value.companyName,
                 desc:form.value.desc,
                 department:form.value.department,
                 employment:form.value.employment,
                 experience:form.value.experience,
                 minSalary: form.value.minSalary,
                 maxSalary: form.value.maxSalary,
                 owner:userStore.$state.user.email,
                 companyType:form.value.companyType,
                 applyURL: form.value.applyLink
             });
             if (error) throw error;
                 loading.value = true;
                 router.push({ path: '/' });
             }
             
             catch (error){
                 throw error
             }
         }

   </script>


<style>
.ql-toolbar.ql-snow{
border:none;

}

.ql-container.ql-snow{
border:none;
font-size: 18px;
padding-top: 20px;
line-height: 22px;

}

.ql-editor{
line-height: 1.83;

}

.ql-tooltip .ql-hidden{
display: none;
}
</style>