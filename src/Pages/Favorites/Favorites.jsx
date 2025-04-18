import { useContext, useEffect } from 'react';

import { Box, Text } from '@chakra-ui/react';

import { RecipesContext } from '../../providers/RecipesProvider';
import CardRecipe from '../../Components/CardRecipe/CardRecipe';

const Favorites = () => {
  const { state, dispatch } = useContext(RecipesContext);
  const { favoriteRecipes } = state;

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    dispatch({ type: 'LOAD_FAVORITES', payload: storedFavorites });
  }, [dispatch]);

  return (
    <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" padding="20px" gap="50px" width="100%" height="100svh">
      {favoriteRecipes.length === 0 ? (
        <Text fontSize="25px">No hay recetas en favoritos</Text>
      ) : (
        favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>
            <CardRecipe recipe={recipe} />
          </li>
        ))
      )}
    </Box>
  );
};

export default Favorites;
