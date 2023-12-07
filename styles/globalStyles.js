import styled, { css } from "styled-components";

export const Container = styled.div`
  flex-grow: 1;

  margin: 0 auto;
  width: 100%;
  height: 100%;

  /* @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1390px;
  } */
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.noHeight &&
    css`
      height: 0px;
    `}
  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}
`;

export const EmptySpace = styled.div`
  height: 142px;
`;
