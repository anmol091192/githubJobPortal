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
}

.companyName {
    background: ${({ theme }) => theme.container};
    color: ${({ theme }) => theme.text};
    margin-top: -50px;
    border-radius: 3px;
    width: 75%;
    border-radius: 3px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    padding:5px;
}

.companyDescription {
    background: ${({ theme }) => theme.container};
    color: ${({ theme }) => theme.text};
    margin-top: 20px;
    border-radius: 3px;
    width: 75%;
    border-radius: 3px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    padding:5px;
}

.jobApply {
    background: ${({ theme }) => theme.container};
    color: ${({ theme }) => theme.text};
    margin-top: 20px;
    border-radius: 3px;
    width: 75%;
    border-radius: 3px;
    margin-right: auto;
    margin-left: auto;
}

.formRowWrapper {
    background: ${({ theme }) => theme.container};
    margin: auto;
    display: flex;
    min-height: 50px;
    align-items: center;
    border-radius: 4px;
    padding:4px;
}

.descriptionLabel {
    background: ${({ theme }) => theme.container};
}

.icon {
    width: auto;
    height: auto;
    padding-left: 4px;
    background: ${({ theme }) => theme.inputColor};
}

.inputField {
    border: none;
    background: ${({ theme }) => theme.inputColor};
}

.themeButton {
    position: absolute;
    display: flex;
    felx-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.text};
    right: 20px;
    top: 28px;
    width:auto;
}
`