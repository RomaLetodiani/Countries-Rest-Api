import { useState, createContext, ReactNode, useContext } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type DarkModeContextProps = {
  handleDarkMode: () => void;
  elemnBg: string;
  bgColor: string;
  inputText: string;
  textColor: string;
  icon: ReactNode;
  iconText: string;
};

const DarkModeContext = createContext<DarkModeContextProps | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((prev: boolean) => !prev);
  };

  const elemnBg = darkMode ? 'bg-[#2b3945]' : 'bg-[#ffffff]';
  const bgColor = darkMode ? 'bg-[#212d38]' : 'bg-[#fafafa]';
  const textColor = darkMode ? 'text-[#ffffff]' : 'text-[#121517]';
  const inputText = darkMode ? 'text-[#ffffff]' : 'text-[#858585]';
  const icon = darkMode ? <BsMoon /> : <BsSun />;
  const iconText = darkMode ? 'Dark Mode' : 'Light Mode';

  return (
    <DarkModeContext.Provider
      value={{
        handleDarkMode,
        elemnBg,
        bgColor,
        textColor,
        inputText,
        icon,
        iconText,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
