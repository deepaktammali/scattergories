import {atom} from "recoil";

const INITIAL_STATE = {
    isPaused:true,
    isRestarted:false
}

export default atom({
    key:'gameplaystate',
    default:INITIAL_STATE
})