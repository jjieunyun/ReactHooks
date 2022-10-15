import {useRef} from "react";

const useFullscreen = (onFullS)=>{
  const element = useRef();
  const runCb = isFull => {
    if(onFullS && typeof onFullS === 'function'){
      onFullS(isFull)
    }
  }

  const triggerFull = () => {
    if(element.current){
      if(element.current.requestFullscreen) {
        element.current.requestFullscreen();
      }else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen()
      }else if(element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      }else if (element.current.msRequestFullscrren) {
        element.current.msRequestFullscrren()
      }
    }
    runCb(true)
  }
  const exitFull = ()=>{
    if(element.current){
      if(document.exitFullscreen) {
        document.exitFullscreen();
      }else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen()
      }else if(document.current.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
    runCb(false)
  }
  return {element, triggerFull, exitFull}
}

export default useFullscreen;