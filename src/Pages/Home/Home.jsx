import { Box, Heading, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDir="column"
      gap="50px"
      padding="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h2">Welcome to Personal Chef</Heading>
      <Image src="https://img.freepik.com/fotos-premium/plato-comida-plato-alimentos-que-dice-comida_954226-104895.jpg" />
    </Box>
  );
};

export default Home;
