import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 2800px;
    height: 100%;

    .slider_inner {
      position: absolute;
      top: 0%;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;

      .articlebox {
        width: 410px;
        height: 100%;
        position: relative;
        overflow: hidden;
        cursor: pointer;
     

        .imgcontainer {
          position: absolute;
          left: -200px;
          width: 800px;
          height: 100%;
          background-size: cover;
          background-position: top center;

          filter: grayscale(1);
          &:hover {
            filter: none;
          }
        }
        .title {
          position: absolute;
          bottom: 15%;
          left: 10%;
          right: 95%;
          text-align: left;
          width: 85%;
          display: flex;
          flex-wrap: wrap;
          
          

          h3 {
            font-size: var(--h5);
            color: #EAE2B7;
            line-height: 0.9;
            font-weight: 700;
            text-transform: uppercase;
      
          }
        }
      }
    }
  }
`;
