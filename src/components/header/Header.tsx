import { Flex } from "src/components/styles/styles";
import styled from "styled-components";

const Header = () => {
  return (
    <Flex
      style={{
        borderBottom: "1px solid gray",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex style={{ maxWidth: 1000, padding: 20 }}>
        {/* NOTE 홈으로 */}
        <div style={{ fontSize: "1.4em" }}>제목</div>
        {/* NOTE 홈으로 */}
        {/* NOTE 기타 링크 */}
        {/* 노션이력서, 깃허브 */}
        {/* NOTE 기타 링크 */}
      </Flex>
    </Flex>
  );
};

export default Header;
