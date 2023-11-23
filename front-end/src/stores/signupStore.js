// useProductStore.js
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const signupStore = (set) => ({
  data: [],
  error: null,
  isLoading: false,
  addUser: async (newUser) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axios.post('http://localhost:8000/api/customer', newUser);
      set((state) => ({ data: [...state.data, response.data], isLoading: false }));
    } catch (error) {
      console.error('Error registering User:', error);
      set({ error, isLoading: false });
    }
  },
  getUsers: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axios.get('http://localhost:8000/api/customer');
      set({ data: response.data, isLoading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      set({ error, isLoading: false });
    }
  },
});

const useSignupStore = create(
  devtools(signupStore)
);

export default useSignupStore;
