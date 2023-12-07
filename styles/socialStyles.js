import styled from 'styled-components';

export const SocialSection = styled.div`
  height: 100vh;
 
  padding: 0 30px;
  .rowcontainer {
    display: block;
    height: 100%;
    .row {
      display: flex;
      flex-direction: row;
      padding: 2vw 0;
      outline: 1px solid white;
      background: black;
      .number {
        font-size: var(--h3);
        padding-right: 20px;
      }
      .title {
        font-size: var(--h3);
        text-transform: uppercase;
      }
    }
  }
`;
