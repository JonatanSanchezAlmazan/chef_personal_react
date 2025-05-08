import { useContext, useState } from 'react';
import { RecipesContext } from '../providers/RecipesProvider';
import { getRecipesRandom } from '../reducers/recipes/recipes.action';

export const useRandomRecipesSearch = () => {
  const { dispatch } = useContext(RecipesContext);
  const [selectedValue, setSelectedValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSearch = async () => {
    if (!selectedValue) return;
    setLoading(true);
    try {
      await getRecipesRandom({
        number: selectedValue,
        dispatch
      });
    } catch (err) {
      console.error('Error fetching recipes:', err);
    } finally {
      setLoading(false);
    }
  };
  return {
    selectedValue,
    loading,
    handleSelectChange,
    handleSearch
  };
};
