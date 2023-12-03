import { useDarkMode } from '@/contexts/DarkModeContext';

const Header = () => {
  const { handleDarkMode, elemnBg, textColor, icon, iconText } = useDarkMode();
  return (
    <header
      className={`${elemnBg} ${textColor} flex justify-between py-8 sm:py-5 px-4 sm:px-10 shadow-lg`}
    >
      <h1 className="sm:text-xl font-bold">Where in the World</h1>
      <button
        className="flex items-center gap-2 text-sm"
        onClick={handleDarkMode}
      >
        {icon}
        {iconText}
      </button>
    </header>
  );
};

export default Header;
