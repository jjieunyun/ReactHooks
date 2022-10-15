import React, {useEffect} from 'react';
import useBeforeLeave from "../Hooks/useBeforeLeave";


function UseBeforeLeave(props) {
  const begForLife = () => console.log("Please Don't Leave");
  useBeforeLeave(begForLife)
  return (
    <div>
      <h3>UseBeforeLeave</h3>
    </div>
  );
}

export default UseBeforeLeave;