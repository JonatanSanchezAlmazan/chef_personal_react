import { useContext } from 'react';
import { RecipesContext } from '../../providers/RecipesProvider';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const RecipeDetail = () => {
  const { state } = useContext(RecipesContext);
  const { recipeById } = state;

  return (
    <Box width="90%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" gap="50px" border="2px solid #319795" marginTop="20px">
      <Heading as="h2" size="lg">
        {recipeById.title}
      </Heading>
      <Image src={recipeById.image} borderRadius="20px" />
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
          Intructions:
        </Heading>
        <Text>{recipeById.instructions.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
        <Heading as="h5" size="md" marginTop="20px" marginBottom="20px">
          Ready in:
        </Heading>
        <Text>{recipeById.readyInMinutes} minutes</Text>
      </Box>
    </Box>
  );
};

export default RecipeDetail;
