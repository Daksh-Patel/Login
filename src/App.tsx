import React from "react"

import { ChakraProvider } from "@chakra-ui/react"

import HomePage from "./pages/home-page"
import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <HomePage />
  </ChakraProvider>
)
