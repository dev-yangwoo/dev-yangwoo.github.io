import { useNavigate } from "react-router-dom";
import { TypeBlog, TypeFlatList } from "src/datas/Type";
import { Flex, FlexRow, FlexRowOne } from "../styles/styles";

export const FlatList = ({
  type,
  data,
}: {
  type: "blog";
  data: TypeFlatList[];
}) => {
  return (
    <div>
      {data.map((item, index) => {
        if (type === "blog") {
          return <FlatListBlogItem key={index} item={item} index={index} />;
        }
        return <FlatListItem key={index} item={item} index={index} />;
      })}
    </div>
  );
};

export const FlatListItem = ({
  item,
  index,
}: {
  item: TypeFlatList;
  index: number;
}) => {
  return <div>{index + 1}</div>;
};

export const FlatListBlogItem = ({
  item,
  index,
}: {
  item: TypeBlog;
  index: number;
}) => {
  const navigate = useNavigate();
  return (
    <FlexRow
      style={{ border: "1px solid white", cursor: "pointer" }}
      onClick={() => {
        console.log(item.id);
        navigate(`/blog/${item.id}`);
      }}
    >
      <Flex
        style={{ minWidth: 55, minHeight: 50, backgroundColor: "purple" }}
      ></Flex>
      <FlexRowOne style={{ padding: 20 }}>
        <FlexRowOne>{item.title.kr}</FlexRowOne>
        <Flex>{item.date}</Flex>
      </FlexRowOne>
    </FlexRow>
  );
};
