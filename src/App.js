import React from 'react';
import { ThemeProvider } from './ThemeContext';

import Header from './Header';
import MainContent from './MainContent';
const App = () => {
  return (
      <ThemeProvider>
      
      <Header />
      <MainContent />
    </ThemeProvider>
  );
};

export default App;