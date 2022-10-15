import React from 'react';
import useFadeIn from "../Hooks/useFadeIn";

function UseFadeIn(props) {
  const fadeInH1 = useFadeIn(1, 2)
  const fadeInP = useFadeIn(5, 10)

  return (
    <div>
      <h3 {...fadeInH1}>UseFadeIn</h3>
      <p {...fadeInP}>lalalala^_^</p>
    </div>
  );
}

export default UseFadeIn;