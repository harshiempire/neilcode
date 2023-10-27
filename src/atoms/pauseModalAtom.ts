import {atom} from "recoil"

type PauseModalAtom ={
    isPause : boolean,
}

const intialPauseModalState : PauseModalAtom = {
    isPause:false
}

export const pauseModalAtom = atom<PauseModalAtom>({
    key:"pauseModalAtom",
    default:intialPauseModalState
})