import {atom} from "recoil";
import generateRandomLetter from "../utils/generateRandomLetter";

const randomLetter = generateRandomLetter();

const letterState = atom({
    default:randomLetter,
    key:'letter'
});

export default letterState;