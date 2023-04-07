import { proxy } from "valtio";

const state =proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./react.png',
    fullDecal:'./react.png',
    cameraTargetPositionLeft:[],
    cameraTargetPositionCenter:[],
    cameraTargetPositionRight:[],
    cameraDirection:"left"



});

export default state;