import React from 'react';
import { Layout } from './style';
import { ThemeName } from '../../styles/themes';
import { Container } from '../../styles/Container';
import { Header } from '../';

interface LayoutProps {
  children: React.ReactNode;
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Main = ({ children, themeName, setThemeName }: LayoutProps) => {
  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    localStorage.setItem('@aztheme', themeName === 'light' ? 'dark' : 'light');
  };
  return (
    <Layout id="layout" data-testid="layout">
      <Header onChangeTheme={toggleTheme} />
      <Container>{children}</Container>
    </Layout>
  );
};

export { Main as Layout };
