import { createContext, useReducer } from 'react';
import { initialState, recipesReducer } from '../reducers/recipes/recipes.reducer';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, initialState);

  return <RecipesContext.Provider value={{ state, dispatch }}>{children}</RecipesContext.Provider>;
};
