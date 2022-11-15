import styled from "styled-components";
type containerr = {
  progress: number;
};
export const container = styled.div<containerr>`
  position: relative;
  height: 400px;
  width: 400px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  background: ${({ progress }): string => {
    return `conic-gradient(
        #5265f7 ${progress * 3.6}deg,
        #cadcff ${progress * 3.6}deg
    )`;
  }};
  
  ::before {
    position: absolute;
    content: "";
    height: 96%;
    width: 96%;
    background-color: orange;
    background-color: #ffffff;
    border-radius: 50%;
  }


  @media (max-width: 1900px) {
    height: 350px;
    width: 350px;
  }
  @media (max-width: 1450px) {
    width: 300px;
    max-width:100%;
    height:auto;
    aspect-ratio : 1 / 1;
  }
`;
export const insideCircle = styled.div`
  position: absolute;
  font-size: 5rem;
  color: #5265f7;
  @media (max-width: 1900px) {
    font-size:4.5rem;
  }
  @media (max-width: 1450px) {
    font-size:4rem;
  }
  @media (max-width: 700px) {
    font-size:3.5rem;
  }
  
`;
