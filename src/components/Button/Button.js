import styled from 'styled-components';

const Button = styled.button`
  font-size: ${props => props.fontSize}px;
  background-color: ${props => props.buttonColor ? props.buttonColor : '#2ed3ae'};
  color: ${props => props.textColor ? props.textColor : 'white'};
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2ed3ae;
  border-radius: 3px;
  font-family: Verdana, Geneva, sans-serif;
`;


export default Button;
