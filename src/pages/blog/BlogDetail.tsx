import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "src/components/common/MarkdownRenderer";
import {
  Flex,
  FlexCenter,
  FlexColumnOne,
  FlexContainer,
  FlexRowOne,
} from "src/components/styles/styles";
import { getBlog } from "src/hooks/useData";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [titleKr, setTitleKr] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [keywordKr, setKeywordKr] = useState<string[]>([]);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (!blogId) return;
    const blogData = getBlog(blogId);
    setTitleKr(blogData.title.kr);
    setDate(blogData.date);
    fetch(blogData.content)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setContent(text);
      });
    const keyKr: string[] = [];
    blogData.keyword?.map((item, index) => {
      keyKr.push(item.kr);
    });
    setKeywordKr(keyKr);
  }, []);

  return (
    <FlexCenter style={{ backgroundColor: "pink" }}>
      <FlexContainer style={{ backgroundColor: "white" }}>
        <FlexColumnOne>
          <FlexRowOne>
            <FlexRowOne>{titleKr}</FlexRowOne>
            <Flex>{date}</Flex>
          </FlexRowOne>

          <FlexColumnOne>
            <MarkdownRenderer data={content} />
          </FlexColumnOne>
          <Flex>
            {keywordKr.map((item, index) => {
              if (index === keywordKr.length - 1) {
                return <Flex key={index}>#{item}</Flex>;
              }
              return <Flex key={index}>#{item}, </Flex>;
            })}
          </Flex>
        </FlexColumnOne>
      </FlexContainer>
    </FlexCenter>
  );
};

export default BlogDetail;
