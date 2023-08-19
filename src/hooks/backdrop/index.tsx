import React, { createContext, useCallback, useContext, useState } from 'react';
import Backdrop from '../../components/Backdrop/BackdropContainer';

interface BackdropContextData {
  // eslint-disable-next-line no-unused-vars
  showBackdrop: (page: React.ReactElement) => void;
  hidePage: () => void;
}

const BackdropContext = createContext<BackdropContextData>({} as BackdropContextData);

const BackdropProvider: React.FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<React.ReactElement>();
  const [isVisible, setIsVisible] = useState(false);

  const showBackdrop = useCallback((page: React.ReactElement) => {
    setCurrentPage(page);
    setIsVisible(true);
  }, []);

  const hidePage = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <BackdropContext.Provider value={{ showBackdrop, hidePage }}>
      {children}
      <Backdrop visible={isVisible}>{currentPage}</Backdrop>
    </BackdropContext.Provider>
  );
};

function useBackdrop(): BackdropContextData {
  const context = useContext(BackdropContext);

  if (!context) {
    throw new Error('useBackdrop must be used within a BackdropProvider');
  }

  return context;
}

export { BackdropProvider, useBackdrop };
