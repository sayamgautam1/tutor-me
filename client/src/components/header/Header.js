import styled, { keyframes } from "styled-components";
import { breakpoints } from "../Media";

import Container from "../container/Container";

export const Float = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const HeadingMain = styled.h1`
  font-weight: 700;
  font-size: 7vw;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  margin-bottom: 0;
  margin-left: 0px;
  color: #ff6362;
  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 60px;
    margin-bottom: 0;
    margin-left: 15px;
  }
  .blue {
    color: #b4e0e8;
  }
  > span {
    display: inline-block;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.2s forwards;
  }
  > span:nth-child(1) {
    animation-delay: 0s;
  }
  > span:nth-child(2) {
    animation-delay: 0.2s;
  }
  > span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
function Header() {
  return (
    <Container>
      <HeadingMain>
        <span>
          TuTor<span className="blue">Me</span>
        </span>
      </HeadingMain>
    </Container>
  );
}

export default Header;
