import React from "react"

import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

import Alert from "./alert"

interface LogoutProps {
  user: string
  setUser: (user: string) => void
}

const Logout = (props: LogoutProps) => {
  const { user, setUser } = props

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HStack alignItems='center' spacing={8}>
      <Button
        letterSpacing={1}
        fontSize='18px'
        fontWeight='semibold'
        onClick={onOpen}
      >
        Logout
      </Button>

      <Alert isOpen={isOpen} onClose={onClose} setUser={setUser} />

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
