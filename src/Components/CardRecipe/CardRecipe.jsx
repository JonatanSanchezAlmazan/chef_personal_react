import {
  Box,
  Button,
  Card,
  CardBody,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RecipesContext } from "../../providers/RecipesProvider";
import {
  addToFavorite,
  deleteToFavorite,
  getRecipeById,
} from "../../reducers/recipes/recipes.action";
import { useNavigate } from "react-router-dom";

const CardRecipe = ({ recipe }) => {
  const { state, dispatch } = useContext(RecipesContext);
  const navigate = useNavigate();

  const isFavorite = state.favoriteRecipes.some((fav) => fav.id === recipe.id);

  const handleClickFavorite = () => {
    if (!isFavorite) {
      addToFavorite({ dispatch, recipe });
    } else {
      deleteToFavorite({ recipe, dispatch, state });
    }
  };

  const handleClickById = async () => {
    const { id } = recipe;

    await getRecipeById({ id, dispatch });

    navigate(`/recipe/${id}`);
  };

  return (
    <Card width="300px" height="400px">
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
      >
        <Image
          onClick={handleClickById}
          width="200px"
          height="200px"
          src={recipe.image}
          alt={recipe.title}
          borderRadius="md"
        />
        <Text mt={2} fontWeight="bold">
          {recipe.title}
        </Text>
        <Box width="100%" display="flex" alignItems="center">
          <IconButton
            onClick={handleClickFavorite}
            aria-label="Add to favorites"
            icon={isFavorite ? <FaHeart /> : <CiHeart />}
            colorScheme="transparent"
            variant="ghost"
            size="lg"
            _hover={{ transform: "scale(1.2)" }}
          />
          <Text>
            {isFavorite ? "Remove from favourites" : "Add to favourites"}
          </Text>
        </Box>
        <Button onClick={handleClickById} colorScheme="green" variant="outline">
          View recipe details
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardRecipe;
