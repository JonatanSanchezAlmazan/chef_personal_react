export const initialState = {
  recipes: [],
  favoriteRecipes: [],
  recipeById: {},
  recipesRandom: [],
  isRandom: false,
  isLoading: false,
  isError: false
};

export const recipesReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'UPLOAD_RECIPES':
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
        isError: false
      };

    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload],
        isError: false
      };
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favoriteRecipes: action.payload,
        isError: false
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter((recipe) => recipe.id !== action.payload),
        isError: false
      };
    case 'ADD_RECIPE_BY_ID':
      return {
        ...state,
        recipeById: action.payload,
        isError: false
      };
    case 'ADD_RECIPES_RANDOM':
      return {
        ...state,
        recipesRandom: action.payload,
        isLoading: false,
        isError: false
      };
    case 'SET_IS_RANDOM':
      return {
        ...state,
        isRandom: action.payload,
        isError: false
      };
    case 'SHOW_ERROR':
      return {
        ...state,
        recipesRandom: [],
        recipes: [],
        isLoading: false,
        isError: true
      };

    default:
      return { ...state };
  }
};
