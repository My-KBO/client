import { create } from 'zustand';

export interface Post {
  id: number;
  category: string;
  title: string;
  content: string;
  authorNickname: string;
  createdAt: string;
  likeCount: number;
  viewCount: number;
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
