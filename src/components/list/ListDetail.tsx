import MarkdownRenderer from "src/components/common/MarkdownRenderer";
import { Flex } from "src/components/styles/styles";
import { useEffect, useState } from "react";

const ListDetail = () => {
  const lists = require(`datas/blog/one.md`);

  const [data, setData] = useState(``);

  useEffect(() => {
    // console.log(lists);
    fetch(lists)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setData(text);
      });
  }, []);

  return (
    <Flex
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex style={{ maxWidth: 1000 }}>
        <div style={{ width: "100%", padding: 20 }}>
          <MarkdownRenderer data={data} />
        </div>
      </Flex>
    </Flex>
  );
};

export default ListDetail;
