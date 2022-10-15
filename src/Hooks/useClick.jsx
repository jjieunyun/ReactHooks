import {useEffect, useRef} from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if(typeof onClick !== 'function') {
      return;
    }
    if(element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if(element.curent) {
        element.current.removeEventListener('click', onClick);
      }
    }
  },[]);
  return typeof onClick !== "function" ? undefined: element;
}

export default useClick