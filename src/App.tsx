import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './services/queryClient';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './style/global';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'OPC UA - Monitor';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
        <GlobalStyle />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
