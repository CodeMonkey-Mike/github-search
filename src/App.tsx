import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeName, themes } from './styles/themes';
import { client } from './helper/apollo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import Routes from './Routes';

const App = () => {
  const [themeName, setThemeName] = useState<ThemeName>(
    localStorage.getItem('@aztheme') === 'dark' ? 'dark' : 'light'
  );
  const currentTheme = themes[themeName];
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={{ mode: 'ccad', withMode: currentTheme }}>
          <GlobalStyle />
          <Routes theme={themeName} onChange={setThemeName} />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
