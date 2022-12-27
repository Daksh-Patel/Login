import React from "react"

import { Avatar, Button, Flex, HStack, Text } from "@chakra-ui/react"

interface LogoutProps {
  user: string
  setUser: (user: string) => void
}

const Logout = (props: LogoutProps) => {
  const { user, setUser } = props

  const logoutProfile = () => {
    setUser("")
  }

  return (
    <HStack alignItems='center' spacing={8}>
      <Button
        letterSpacing={1}
        fontSize='18px'
        fontWeight='semibold'
        onClick={logoutProfile}
      >
        Logout
      </Button>
      <Flex alignItems='center'>
        <Text
          as='h1'
          fontSize='20px'
          fontWeight='semibold'
          letterSpacing={1}
          pr='10px'
        >
          {user}
        </Text>
        <Avatar name={user} />
      </Flex>
    </HStack>
  )
}

export default Logout
