import React, { createContext, useCallback, useContext, useState } from 'react';

import BackdropContainer from '../../components/BackdropContainer';

export interface BackdropInformations {
  show?: boolean;
  type?: 'confirmation';
  text: string;
  onConfirm?(): void;
}

interface BackdropContextData {
  addBackdrop(informations: Omit<BackdropInformations, 'show'>): void;
  removeBackdrop(): void;
  isBackdropVisible: boolean;
}

const BackdropContext = createContext<BackdropContextData>({} as BackdropContextData);

const BackdropProvider: React.FC = ({ children }) => {
  const [information, setInformations] = useState<BackdropInformations>({
    type: 'confirmation',
    text: '',
    show: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  const addBackdrop = useCallback(({ type, onConfirm, text }: Omit<BackdropInformations, 'show'>) => {
    const backdrop = {
      type,
      onConfirm,
      text,
      show: true,
    };
    setIsVisible(true);
    return setInformations({ ...backdrop });
  }, []);

  const removeBackdrop = useCallback(() => {
    setTimeout(() => setIsVisible(false), 800);
    setInformations({ type: 'confirmation', text: '', show: false, onConfirm: () => ({}) });
  }, []);

  return (
    <BackdropContext.Provider value={{ addBackdrop, removeBackdrop, isBackdropVisible: isVisible }}>
      {children}
      <BackdropContainer {...information} />
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
