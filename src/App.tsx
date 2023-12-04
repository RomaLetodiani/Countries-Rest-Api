import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { useDarkMode } from './contexts/DarkModeContext';
import Main from './components/Main/Main';
import Details from './components/details/Details';

const App = () => {
  const { bgColor } = useDarkMode();
  return (
    <div className={`${bgColor} min-h-screen min-w-[280px]`}>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/:name" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
