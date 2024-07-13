import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';
import { useUserStore } from './user';

export const useTempJobStore = defineStore('tempJob', {
  state: () => ({
    stage: 1,
    companyName: 'tempName',
    companyType: 'tempType',
    companyAvatar:'https://wtrcbpaxzprcosxxacuk.supabase.co/storage/v1/object/public/temp_avt/raf_360x360_075_t_fafafa_ca443f4786.jpg',
    positionName: null,
    department: null,
    experience: null,
    employment: null,
    minSalary: null,
    maxSalary: null,
    desc: null,
    applyLink: null,
  }),
  actions: {
    async addDraft() {
      try {
        const supabase = useSupabaseClient();
        const userStore = useUserStore();
        const { data, error } = await supabase.from('jobs').insert({
          positionName: this.positionName,
          companyName: this.companyName,
          companyAvatar: this.companyAvatar,
          desc: this.desc,
          department: this.department,
          employment: this.employment,
          experience: this.experience,
          minSalary: this.minSalary,
          maxSalary: this.maxSalary,
          ownerEmail: userStore.user.email,
          ownerID: userStore.user.id, // Użyj właściwości user z userStore
          companyType: this.companyType,
          applyURL: this.applyLink,
          status: "draft"
        }).select();
        console.log(data)
        if (error) {
          throw error;
        }
        return data[0].id;
      } catch (error) {
        throw error;
      }
    },
  },
});