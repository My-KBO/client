import { create } from 'zustand';

export interface Post {
  d: number;
  title: string;
  content: string;
  views: number;
  likes_count: number;
  category: string;
  created_at: string;
  updated_at: string;
  user: {
    nickname: string;
  };
}

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
  setPosts: (posts: Post[]) => void;
}

export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  addPost: (post) =>
    set((state) => ({
      posts: [...state.posts, post],
    })),
  setPosts: (posts) => set({ posts }),
}));
