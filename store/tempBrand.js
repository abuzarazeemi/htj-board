import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';
import { useUserStore } from './user';

export const useTempBrandStore = defineStore('tempBrand', {
  state: () => ({
    companyName: null,
    companyType: null,
    companyAvatar: null,
    companySize: null,
  }),
  actions: {
    async saveBrand() {
      try {
        const userStore = useUserStore();
        const supabase = useSupabaseClient();

        // Logowanie całego userStore
        console.log("User Store:", userStore);

        // Sprawdzenie, czy email istnieje w userStore
        if (!userStore.user.email) {
          throw new Error("Email is not defined in userStore");
        }

        console.log("Email:", userStore.user.email); // Dodane logowanie
        console.log("Company Name:", this.companyName); // Dodane logowanie
        console.log("Company Type:", this.companyType); // Dodane logowanie

        // Aktualizacja istniejącego rekordu w tabeli profile
        const { data, error } = await supabase
          .from('profile')
          .update({
            compName: this.companyName,
            compType: this.companyType,
          })
          .eq('email', userStore.user.email);

        console.log("Data:", data); // Dodane logowanie
        console.log("Error:", error); // Dodane logowanie

        if (error) {
          throw error;
        }

        console.log(data);
      } catch (error) {
        console.error(error); // Logowanie błędu
      }
    },
  },
});
