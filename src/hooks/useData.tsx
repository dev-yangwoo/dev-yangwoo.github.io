import { Blog } from "src/datas/Data";

export const getBlogs = () => {
  return Blog;
};

export const getBlog = (id: string) => {
  return Blog.filter((item) => item.id === +id)[0];
};
