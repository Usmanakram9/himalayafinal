import {create} from 'zustand';
import { persist } from 'zustand/middleware';

// Initial state for MarbleCalculator
const initialState = {
  selectedOption: 'sqt',
  topOptionChecked: false,
  edgeOptionChecked: false,
  length: '',
  width: '',
  quantity: '',
  thickness: '',
  subTotal: '',
};

// Define the store
const useMarbleCalculatorStore = create(persist(
  (set) => ({
    // State
    ...initialState,
    // Actions to update state
    setSelectedOption: (option) => set({ selectedOption: option }),
    setTopOptionChecked: (checked) => set({ topOptionChecked: checked }),
    setEdgeOptionChecked: (checked) => set({ edgeOptionChecked: checked }),
    setLength: (value) => set({ length: value }),
    setWidth: (value) => set({ width: value }),
    setQuantity: (value) => set({ quantity: value }),
    setThickness: (value) => set({ thickness: value }),
    setSubTotal: (value) => set({ subTotal: value }),
    resetCalculator: () => set(initialState), // Reset all values to initial state
  }),
  {
    name: 'marble-calculator-storage', // Name for localStorage
    blacklist: ['resetCalculator'], // Exclude resetCalculator from being persisted 100
  }
));

export default useMarbleCalculatorStore;
