import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterSection = styled(motion.div)`
  height: 100vh;
  width: fit-content;
  background: #003049;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  padding: 0 30px;
`;
export const Logo = styled.div`

  h4 {
    font-size: var(--h4 );
    text-transform: uppercase;
    font-weight: 900;
    color: #EAE2B7;
    cursor: pointer;

    width: fit-content;
    &:hover{
      color: black;
    }
  }
  h5{
    font-size: var(--body-big);
    cursor: pointer;
    width: fit-content;
    color: #EAE2B7;
}
`;

export const FooterList = styled.ul`
width: 100%;
padding-top: 20px;
`;

export const FooterListItem = styled.li`
  list-style: none;
  text-decoration: none;
  padding-bottom: 5px;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
 
  h6{
    font-size: var(--h6);
    font-weight: 500;
    color: #EAE2B7;
    &:hover{
      font-weight: 700;
    }
  }
`;

export const FooterIconList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
`;
export const FooterIconItem = styled.div`
  font-size: 21px;
  padding-left: 20px;
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;



  
`;
