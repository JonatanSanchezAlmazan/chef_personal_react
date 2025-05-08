import { useContext } from 'react';
import { RecipesContext } from '../../providers/RecipesProvider';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import Error from '../Error/Error';
import { useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const navigate = useNavigate();
  const { state } = useContext(RecipesContext);
  const { recipeById, isError } = state;

  const goBack = () => {
    navigate('/recipes');
  };

  return isError ? (
    <Error />
  ) : (
    <Box width="90%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" gap="50px" marginTop="20px" marginBottom="50px">
      <Button onClick={goBack}>Volver a las recetas</Button>
      <Heading as="h3" size="md">
        {recipeById.title}
      </Heading>
      <Image
        src={recipeById.image}
        borderRadius="20px"
        onError={(e) => {
          e.target.src = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg';
        }}
      />
      <Box as="ul" width="300px" backgroundColor="#319795" padding="20px" borderRadius="20px">
        <Heading as="h3" size="lg" marginBottom="20px">
          Ingredients:
        </Heading>
        {recipeById.extendedIngredients.map((ingredient, index) => (
          <li key={index}>
            {index + 1} - {ingredient.name.toUpperCase()}
          </li>
        ))}
      </Box>
      <Box minW="300px" maxWidth="1200px">
        <Heading as="h3" size="lg" marginBottom="20px">
          Instructions:
        </Heading>
        <Text>{recipeById.instructions ? recipeById.instructions.replace(/<\/?[^>]+(>|$)/g, '') : 'No instructions available.'}</Text>
        <Heading as="h5" size="md" marginTop="20px" marginBottom="20px">
          Ready in:
        </Heading>
        <Text>{recipeById.readyInMinutes} minutes</Text>
      </Box>
    </Box>
  );
};

export default RecipeDetail;
