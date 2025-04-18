export const initialState = {
  recipes: [],
  favoriteRecipes: [],
  recipeById: {},
  recipesRandom: [],
  isRandom: false,
  isLoading: false
};

export const recipesReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'UPLOAD_RECIPES':
      return {
        ...state,
        recipes: action.payload,
        isLoading: false
      };

    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload]
      };
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favoriteRecipes: action.payload
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter((recipe) => recipe.id !== action.payload)
      };
    case 'ADD_RECIPE_BY_ID':
      return {
        ...state,
        recipeById: action.payload
      };
    case 'ADD_RECIPES_RANDOM':
      return {
        ...state,
        recipesRandom: action.payload,
        isLoading: false
      };
    case 'SET_IS_RANDOM':
      return {
        ...state,
        isRandom: action.payload
      };

    default:
      return { ...state };
  }
};
