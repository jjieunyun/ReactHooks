import React from 'react';
import useClick from '../Hooks/useClick'

function UseClick(props) {
  const onClick = () => {
    console.log('say Hello')
  }
  const title = useClick(onClick);

  return (
    <div>
      <h3 ref={title}>UseInput</h3>
    </div>
  );
}

export default UseClick;