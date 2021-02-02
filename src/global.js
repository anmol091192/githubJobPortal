import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  .cardWrapper {
    background: ${({ theme }) => theme.container};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    border: none;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    width: 30%;
    min-width: 280px;
    margin: 20px auto;
    max-height: 400px;
}`