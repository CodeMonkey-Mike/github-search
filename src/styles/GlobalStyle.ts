import { grey500, black } from './colors';
import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    /* body will be set to box-sizing: border-box; */
    box-sizing: inherit; 
    line-height: 1.428;
  }

  *:not(input, textarea) {
    user-select: none;

  }

  html {
    overflow-x: hidden;
    min-height: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    box-sizing: border-box;
    color: ${grey500};
    font-size: 1rem;
    height: 100%;
    &::-webkit-scrollbar {
      width: 8px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #BCBEC0;
      border-radius:10px;
    }
  }

  #root {
    height: 100%;
  }

  :root {
    ${(props) => {
      const { withMode } = props.theme as DefaultTheme & { withMode: string };
      let append = '';
      Object.entries(withMode).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {    
    font-family: "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif;
  }

  h1 {
    font-weight: lighter;    
  }
  
  h2 {
    font-weight: normal;
  }
  
  h3 {
    font-weight: bold;
  }
  
  h4 {
    font-weight: bold;
  }
  
  h5 {
    font-weight: bold;
  }
  
  h6 {
    font-weight: bold;
  }

  p {
    padding: 0;
    margin: 0 0 0.5em;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-flex;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${black};
    font-size: inherit;
  }
`;
