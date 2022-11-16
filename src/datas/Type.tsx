export type TypeBlog = {
  id: number;
  title: {
    kr: string;
    en: string;
  };
  content: string;
  date: string;
  keyword?: { kr: string; en: string }[];
};

export type TypeFlatList = TypeBlog;
