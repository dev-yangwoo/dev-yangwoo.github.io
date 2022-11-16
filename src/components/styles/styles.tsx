import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FlexOne = styled(Flex)`
  flex: 1;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexColumnOne = styled(FlexColumn)`
  flex-direction: column;
  flex: 1;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexRowOne = styled(FlexRow)`
  flex: 1;
`;

export const FlexCenter = styled(Flex)`
  align-item: center;
  justify-content: center;
`;

export const FlexContainer = styled(FlexOne)`
  max-width: 1000px;
  padding: 20px;
`;
