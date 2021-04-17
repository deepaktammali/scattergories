import React from "react";
import {Box,Flex,Text} from "@chakra-ui/react";

function CategoriesHeader(){
    return (
        <Flex fontWeight="bolder" fontSize="1.2rem" alignItems="center" w="100%" borderBottom="3px solid #000000">
            <Text left="1rem">Categories</Text>
        </Flex>
    );
}

export default CategoriesHeader;