import React from 'react'
import { Grid, GridItem, Center } from '@chakra-ui/react'
import {RecoilRoot} from "recoil";
import "@fontsource/roboto";

// React Components
import Letter from './components/Letter'
import Categories from './components/Categories'
import Restart from './components/Restart'
import Time from './components/Time'
import Play from "./components/Play";

// CSS
import "./App.css";


function App () {
  return (
    <RecoilRoot>
    <Center h="100%" w='100%'>
      <Grid
      className='App_container border_container'
      templateColumns='1.5fr 1.5fr 5fr 1fr'
      templateRows='repeat(2,1fr)'
      width="96vw"
      height="90vh"
      marginTop="2.5vh"
      fontFamily="Roboto"
    >
      <GridItem colSpan={2} className='App_griditem border_container'>
        <Letter></Letter>
      </GridItem>
      <GridItem rowSpan={2} className='border_container'>
        <Categories></Categories>
      </GridItem>
      <GridItem rowSpan={2} className='border_container'>
          <Restart></Restart>
      </GridItem>
      <GridItem className='border_container'>
          <Time></Time>
      </GridItem>
      <GridItem className='border_container'>
        <Play></Play>
      </GridItem>
    </Grid>
    </Center>
    </RecoilRoot>
  )
}

export default App;
