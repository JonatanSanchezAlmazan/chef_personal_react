export const getRecipes = async ({ dispatch }) => {
  dispatch({ type: 'LOADING' });
  const cachedRecipes = localStorage.getItem('recipes');

  if (cachedRecipes) {
    dispatch({
      type: 'UPLOAD_RECIPES',
      payload: JSON.parse(cachedRecipes)
    });
  } else {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=20`);

    const data = await response.json();

    dispatch({
      type: 'UPLOAD_RECIPES',
      payload: data.results
    });

    localStorage.setItem('recipes', JSON.stringify(data.results));
  }
};

export const addToFavorite = ({ dispatch, recipe }) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isAlreadyFavorite = favorites.some((fav) => fav.id === recipe.id);
  if (isAlreadyFavorite) return;
  favorites.push(recipe);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  dispatch({ type: 'ADD_TO_FAVORITE', payload: recipe });
};

export const deleteToFavorite = ({ recipe, state, dispatch }) => {
  const updatedFavorites = state.favoriteRecipes.filter((favRecipe) => favRecipe.id !== recipe.id);

  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));

  dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: recipe.id });
};

export const getRecipeById = async ({ id, dispatch }) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`);

  const data = await response.json();

  dispatch({ type: 'ADD_RECIPE_BY_ID', payload: data });
};

export const getRecipesRandom = async ({ number, dispatch }) => {
  dispatch({ type: 'LOADING' });
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${import.meta.env.VITE_API_KEY}`);

  const data = await response.json();
  console.log(data);

  dispatch({
    type: 'ADD_RECIPES_RANDOM',
    payload: data.recipes
  });

  dispatch({ type: 'SET_IS_RANDOM', payload: true });
};
