import { TypeBlog } from "./Type";

export const Blog: TypeBlog[] = [
  {
    id: 1,
    title: {
      kr: "깃허브 블로그 시작하기 #1",
      en: "start github blog #1",
    },
    content: require(`src/datas/blog/one.md`),
    date: "2022.11.14",
    keyword: [{ kr: "깃허브 블로그", en: "github blog" }],
  },
];
