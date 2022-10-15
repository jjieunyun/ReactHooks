import React, {useEffect, useState} from 'react';
import useScroll from "../Hooks/useScroll";

function UseScroll(props) {
  const { y } = useScroll()

  return (
    <div style={{height : '1000vh'}}>
      <h3 style={{position:'fixed', color : y > 100? 'red':'blue'}}>UseScroll</h3>
    </div>
  );
}

export default UseScroll;