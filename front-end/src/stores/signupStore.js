// useProductStore.js
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useProductStore = create(
  devtools((set) => ({
    data: [],
    singleUser: [],
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
    getUserById: async (userId) => {
      try {
        set({ isLoading: true, error: null });
        const response = await axios.get(`http://localhost:8000/api/customer/${userId}`);
        set({ singleUser: response.data, isLoading: false });
      } catch (error) {
        console.error('Error fetching data:', error);
        set({ error, isLoading: false });
      }
    },
    deleteUserById: async (userId) => {
      try {
        set({ isLoading: true, error: null });
        await axios.delete(`http://localhost:8000/api/customer/${userId}`);
        set((state) => ({
          data: state.data.filter((user) => user._id !== userId),
          isLoading: false,
        }));
      } catch (error) {
        console.error('Error deleting user:', error);
        set({ error, isLoading: false });
      }
    },
    updateUserById: async (userId, updatedData) => {
      try {
        set({ isLoading: true, error: null });
        const response = await axios.put(`http://localhost:8000/api/customer/${userId}`, updatedData);
        set((state) => ({
          data: state.data.map((user) =>
            user._id === userId ? { ...user, ...response.data } : user
          ),
          isLoading: false,
        }));
      } catch (error) {
        console.error('Error updating user:', error);
        set({ error, isLoading: false });
      }
    },
  }))
);

export default useProductStore;
