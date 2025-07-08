import{ create } from 'zustand';

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  team: string;
  setForm: (key: string, value: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
  team: '',
  setForm: (key, value) => set((state) => ({ ...state, [key]: value })),
}));