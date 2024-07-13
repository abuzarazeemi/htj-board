import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';



export const useAllJobsStore  = defineStore('allJobs', {
    state: () => ({
      jobs:null
    }),
    actions: {
      
      async filterJobs(search,type,level,company) {
        const supabase = useSupabaseClient();
          let query = supabase.from('jobs').select('*');
        
          if (search) {
            query = query.or(`positionName.ilike.%${search}%,companyName.ilike.%${search}%`);
          }
          if (level !="") {
            query = query.or(`experience.ilike.%${level}%`);
          }
    
          if (type !="") {
            query = query.or(`department.ilike.%${type}%`);
          }
  
          if (type !="") {
              query = query.or(`companyType.ilike.%${company}%`);
            }
          
        
          const { data, error } = await query;
        
          if (error) {
            console.log('Błąd pobierania danych', error);
          } else {
            this.jobs = data;
          }
        }  
    },
  });