import React from 'react'
import { Center, Flex } from '@chakra-ui/react'
import CategoriesHeader from './CategoriesHeader'

function Categories (props) {
  return (
    <Flex h="100%" flexDirection="column">
      <CategoriesHeader className="border_container"/>
      <Center>Categories</Center>
    </Flex>
  )
}

export default Categories
