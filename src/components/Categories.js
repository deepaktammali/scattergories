import React, { useEffect, useState } from 'react'
import { Center, Flex,Box, VStack } from '@chakra-ui/react'
import CategoriesHeader from './CategoriesHeader'
import CategoryItem from './CategoryItem'
import returnRandomCategories from "../utils/returnRandomCategories";

import "./styles/Categories.css";
import { useRecoilValue } from 'recoil';
import gamePlayState from '../state/play_status_state';

function Categories (props) {

  const [gameCategories,setGameCategories] = useState([]);
  const gamePlayStatus = useRecoilValue(gamePlayState);
  const [shouldHideText,setshouldHideText] = useState(true);
  
  useEffect(async ()=>{
      setshouldHideText(gamePlayStatus.isPaused);
  },[gamePlayStatus.isPaused])


  useEffect(async()=>{
    const categoriesReturned = await returnRandomCategories(10);
    console.log(categoriesReturned);
    setGameCategories(categoriesReturned);
  },[gamePlayStatus.isRestarted]);

  return (
    <Flex justifyContent="center" h="100%" flexDirection="column">
      <Box flex={1}>
      <CategoriesHeader className="border_container"/>
      </Box>
      <VStack className="Categories_stack" h="100%" w="100%" flex={20} overflowY="scroll">
        {gameCategories.map((item,index)=>{
          return <CategoryItem shouldHideText={shouldHideText} index={index+1} categoryName={item} />;
        })}
      </VStack>
    </Flex>
  )
}

export default Categories
