import styled from "styled-components/macro";

const Button = styled.button`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 25px;
  min-width: 150px;
  line-height: 156.19%;
  padding: 7px;
  color: black;
  letter-spacing: 0.03em;
  border: none;
  border-bottom: 1px solid #5e5e5e;
  border-radius: 25px;
  text-align: center;
  transition: all 0.2s;
  margin: 5px;
  background-color: white;

  &:hover {
    border: none;
    border-bottom: 1px solid white;
    background-color: #ff6362;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

export default Button;
