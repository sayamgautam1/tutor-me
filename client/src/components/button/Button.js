import styled from "styled-components/macro";

const Button = styled.button`
  padding: 10px;
  ont-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 15px;
  min-width: 150px;
  background: white;
  display: inline-block;
  background: linear-gradient(
    to right,
    #ff6362 0%,
    #ff6362 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  margin-right: 5px;
  border-radius: 25px;
  border: 5px solid #fff0f1;
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 0.3s;
  cursor: pointer;
  &:hover {
    background-position: 0 0;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

export default Button;
