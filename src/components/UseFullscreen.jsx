import React from 'react';
import useFullscreen from "../Hooks/useFullscroll";

function UseFullscreen(props) {
  const onFullS = (isFull) => {
    console.log(isFull? "We are Full":"we Are Small")
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFullS)

  return (
    <div>
      <h3>UseFullScreen</h3>
      <div ref={element}>
        <img
          src="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_960_720.jpg" alt=""/>
        <button onClick={triggerFull}>Make FullScreen</button>
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>

    </div>
  );
}

export default UseFullscreen;