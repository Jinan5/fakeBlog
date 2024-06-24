// export type PostObject = {
//   posts: PostsItem[];
//   postCategories: PostCategoriesItem[];
// };
export type PostsItem = {
  id: number;
  title: string;
  body: string;
  userId: number;
  date: number;
  category: string;
};
export type PostCategoriesItem = {
  id: string;
  title: string;
};
