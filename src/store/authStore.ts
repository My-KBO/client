import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>(
  (set: (partial: Partial<AuthState>) => void) => ({
    accessToken: null,
    setAccessToken: (token: string) => set({ accessToken: token }),
  }),
);
