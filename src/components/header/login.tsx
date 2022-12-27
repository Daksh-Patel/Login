import React from "react"

import { Avatar, Box, Tooltip } from "@chakra-ui/react"

const Login = () => (
  <Box>
    <Tooltip label='Please Login' background='black' color='white'>
      <Avatar cursor='pointer' />
    </Tooltip>
  </Box>
)

export default Login
