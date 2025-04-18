import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

import Home from './Pages/Home/Home';
import Recipe from './Pages/Recipe/Recipe';
import Favorites from './Pages/Favorites/Favorites';

import RecipeDetail from './Components/RecipeDetail/RecipeDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/recipe/:name" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
