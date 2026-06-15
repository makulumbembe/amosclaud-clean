export type AmosUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt: string;
};

export type AmosPost = {
  id: string;
  userId: string;
  username: string;
  caption: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  likes: number;
  comments: number;
  createdAt: string;
};

export const demoUsers: AmosUser[] = [
  {
    id: "user_amosclaud",
    name: "Amosclaud",
    username: "amosclaud",
    email: "admin@amosclaud.com",
    avatar: "A",
    createdAt: new Date().toISOString(),
  },
];

export const demoPosts: AmosPost[] = [
  {
    id: "post_1",
    userId: "user_amosclaud",
    username: "amosclaud",
    caption: "Welcome to Amosclaud Feed 🚀",
    mediaUrl: "",
    mediaType: "image",
    likes: 120,
    comments: 18,
    createdAt: new Date().toISOString(),
  },
];

export function createPost(post: Omit<AmosPost, "id" | "likes" | "comments" | "createdAt">): AmosPost {
  return {
    id: `post_${Date.now()}`,
    likes: 0,
    comments: 0,
    createdAt: new Date().toISOString(),
    ...post,
  };
}
