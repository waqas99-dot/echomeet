// Global Styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  input {
    padding: 10px 15px;
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 5px;
    font-size: 16px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.secondary};
      box-shadow: 0 0 10px ${props => props.theme.secondary}40;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;
