import React, { useState } from "react"

import { Box, Container, HStack, Link } from "@chakra-ui/react"

import Login from "./login"
import Logout from "./logout"

const Header = () => {
  const [user, setUser] = useState<string>("Daksh Patel")

  return (
    <Box as='header' py='10px' boxShadow='lg'>
      <Container maxW='1540px' px='50px'>
        <HStack alignItems='center' justifyContent='space-between'>
          <Link
            href='/'
            fontSize='42px'
            fontWeight='bold'
            _hover={{ textDecoration: "none" }}
          >
            Login
          </Link>

          <Box>
            {user ? <Logout user={user} setUser={setUser} /> : <Login />}
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

export default Header
