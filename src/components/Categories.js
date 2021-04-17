import React from 'react'
import { Center, Flex,Box, VStack } from '@chakra-ui/react'
import CategoriesHeader from './CategoriesHeader'
import CategoryItem from './CategoryItem'

import "./styles/Categories.css";

function Categories (props) {
  return (
    <Flex justifyContent="center" h="100%" flexDirection="column">
      <Box flex={1}>
      <CategoriesHeader className="border_container"/>
      </Box>
      <VStack className="Categories_stack" h="100%" w="100%" flex={15} overflowY="scroll">
        {[1,2,3,4,5,6,1,11,1,1,1,1,1,11].map(item=>{
          return <CategoryItem />;
        })}
      </VStack>
    </Flex>
  )
}

export default Categories
