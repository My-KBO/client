import{ create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  team: string;
  setForm: (key: string, value: string) => void;
}

type User = {
  id: string;
  // email: string;
  nickname: string;
  favoriteTeam: string;
};

interface UserState {
  user: User | null;
  accessToken: string | null;
  hasHydrated: boolean;
  setUser: (user: User | null) => void;
  setAccessToken: (token: string | null) => void;
  setHasHydrated: (v: boolean) => void;
}

export const useFormStore = create<FormState>((set) => ({
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
  team: '',
  setForm: (key, value) => set((state) => ({ ...state, [key]: value })),
}));

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      hasHydrated: false,
      setUser: (user) => set({ user }),
      setAccessToken: (token) => set({ accessToken: token }),
      setHasHydrated: (v) => set({ hasHydrated: v }),
    }),
    {
      name: 'user-storage', 
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
      }),
      onRehydrateStorage: () => {
        return (state) => {
          // 함수가 있을 때만 호출
          if (state?.setHasHydrated) {
            state.setHasHydrated(true);
          }
        };
      },
    }
  )
);