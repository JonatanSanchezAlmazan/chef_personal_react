import { Box, IconButton, Select } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { getRecipesRandom } from '../../reducers/recipes/recipes.action';
import { RecipesContext } from '../../providers/RecipesProvider';

const SearchBar = () => {
  const { dispatch } = useContext(RecipesContext);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSearchClick = async () => {
    await getRecipesRandom({
      number: selectedValue,
      dispatch
    });
  };

  return (
    <Box width="100%" height="20%" display="flex" gap="10px" justifyContent="center" padding="20px">
      <Select placeholder="Select Random Number" size="md" width="300px" onChange={handleSelectChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </Select>
      <IconButton onClick={handleSearchClick} aria-label="Search database" icon={<CiSearch />} />
    </Box>
  );
};

export default SearchBar;
