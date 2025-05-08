import { Box, Heading, Skeleton } from '@chakra-ui/react';
import CardRecipe from '../../Components/CardRecipe/CardRecipe';
import { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../../providers/RecipesProvider';
import { getRecipes } from '../../reducers/recipes/recipes.action';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Error from '../../Components/Error/Error';

const Recipe = () => {
  const { state, dispatch } = useContext(RecipesContext);

  const { recipes, recipesRandom, isRandom, isLoading, isError } = state;

  useEffect(() => {
    getRecipes({ dispatch, state });
  }, [isRandom]);

  const displayRecipes = isRandom ? recipesRandom : recipes;
  return (
    <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" padding="20px">
      <Heading as="h4" size="md" marginBottom="20px">
        Search recipes of number random
      </Heading>
      <SearchBar></SearchBar>
      <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" padding="20px" gap="50px" width="100%">
        {isError && <Error />}
        {isLoading ? (
          <img className="loading" src="/loading.gif" alt="Loading" />
        ) : (
          displayRecipes.map((recipe) => (
            <li key={recipe.id}>
              <CardRecipe recipe={recipe} />
            </li>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Recipe;
