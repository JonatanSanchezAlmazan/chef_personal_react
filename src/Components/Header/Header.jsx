import { NavLink } from "react-router-dom";
import "./Header.css";

import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      padding="4"
      bg="teal.500"
      color="white"
      width="100%"
      height="150px"
    >
      <Heading as="h1" size="xl" marginBottom="4" textAlign="center">
        Personal Chef
      </Heading>
      <Box as="ul" width="100%">
        <Box as="li" width="100%" display="flex" justifyContent="space-evenly">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
