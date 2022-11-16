import { useEffect, useState } from "react";
import { FlatList } from "src/components/list/FlatList";
import { FlexCenter, FlexContainer } from "src/components/styles/styles";
import { TypeBlog } from "src/datas/Type";
import { getBlogs } from "src/hooks/useData";

const Blog = () => {
  const [blogList, setBlogList] = useState<TypeBlog[]>([]);

  useEffect(() => {
    setBlogList(getBlogs());
  }, []);
  return (
    <FlexCenter>
      <FlexContainer>
        <FlatList type={"blog"} data={blogList} />
      </FlexContainer>
    </FlexCenter>
  );
};

export default Blog;
