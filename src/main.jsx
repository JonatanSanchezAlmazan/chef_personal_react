import { createRoot } from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RecipesProvider } from "./providers/RecipesProvider";
import App from "./App";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <RecipesProvider>
        <App />
      </RecipesProvider>
    </BrowserRouter>
  </ChakraProvider>
);
