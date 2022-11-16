import { useEffect, useState } from "react";
import { Flex } from "src/components/styles/styles";
import { TypeBlog } from "src/datas/Type";
import { getBlog } from "src/hooks/useData";

const List = () => {
  const [blogList, setBlogList] = useState<TypeBlog[]>([]);

  useEffect(() => {
    // const dd = getBlog();
    // console.log(dd);
    console.log("how many?");
  }, []);

  return (
    <Flex
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex style={{ maxWidth: 1000 }}>
        <div style={{ width: "100%", padding: 20 }}>{/*  */}</div>
      </Flex>
    </Flex>
  );
};

export default List;
