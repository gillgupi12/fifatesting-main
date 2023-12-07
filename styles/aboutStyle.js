import styled from 'styled-components';

export const AboutSection = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  color: #EAE2B7;

  .sectiontitle {
    width: 40%;
    padding: 6vw 0px 6vw 30px;
   

    h1 {
      font-size: var(--h4);
      font-weight: 700;
      float: left;
    }
  }
  .sectioncontent {
    width: 60%;
    display: flex;
    flex-direction: column;

    background: #D62828;
    padding: 6vw;
    .top {
      width: 100%;
      padding-bottom: 3vw;
      display: flex;
      flex-direction: row;
      h2 {
        font-size: var(--h4);
      }
    }
    .btm {
      width: 100%;
      display: flex;
      flex-direction: row;
      h3 {
        font-size: var(--h6);
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    .sectiontitle {
      width: 100%;

      h1 {
      }
    }
    .sectioncontent {
      width: 100%;
      height: 100%;
      .top {
        h2 {
          font-size: var(--h4);
        }
      }
      .btm {
        h3 {
          font-size: calc(var(--h6) + 3px);
        }
      }
    }
  }
`;
