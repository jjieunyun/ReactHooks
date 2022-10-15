import React, {useEffect, useState} from 'react';
import useScroll from "../Hooks/useScroll";

function UseScroll(props) {
  const { y } = useScroll()

  return (
    <div style={{height : '700px'}}>
      <h3 style={{position:'fixed', color : y > 100? 'red':'blue', top : '700px'}}>UseScroll</h3>
    </div>
  );
}

export default UseScroll;