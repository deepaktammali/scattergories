import React from "react";
import {Box} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import letterState from "../state/letter_state";
import generateRandomLetter from "../utils/generateRandomLetter";




function LetterReRoll(){
    const setLetter = useSetRecoilState(letterState);

    const handleReRollClick = ()=>{
        setLetter(generateRandomLetter());
    }

    return (
        <Box
        className="Letter_reroll"
        onClick={handleReRollClick}
        >
            Re-Roll
        </Box>
    );
}

export default LetterReRoll;