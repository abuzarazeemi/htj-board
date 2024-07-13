import { defineStore } from 'pinia';
import { useSupabaseClient } from '#imports';

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: null,
    brand: null,
    error: null,
  }),
  actions: {
    async setUser() {
      const supabase = useSupabaseClient();
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        this.error = error.message;
        return;
      }
      console.log(user);
      this.user = user;
      await this.setBrand();
    },
    async setBrand() {
      if (this.user) {
        const supabase = useSupabaseClient();
        try {
          const { data, error } = await supabase.from('profile').select().eq('email', this.user.email);
          if (error) {
            throw error;
          }
          if (data && data.length > 0) {
            this.brand = data;
          } else {
            console.log('No data found');
          }
        } catch (error) {
          console.error(error.message);
        }
      }
    },
    async register(email, password) {
      const supabase = useSupabaseClient();
      try {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: 'http://localhost:3000/',
          },
        });
        if (error) {
          throw error;
        }
        this.error = '';
      } catch (err) {
        this.error = 'Registration failed';
        console.error(err);
      }
    },
    async login(email, password) {
      const supabase = useSupabaseClient();
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
          options: {
            emailRedirectTo: 'http://localhost:3000/',
          },
        });
        if (error) {
          throw error;
        }
        this.error = '';
      } catch (err) {
        this.error = 'Login failed';
        console.error(err);
      }
    },
  },
});
