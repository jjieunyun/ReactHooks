import React from 'react';
import usePreventLeave from "../Hooks/usePreventLeave";

function UsePreventLeave(props) {
  const { enablePrevent, disablePrevent } = usePreventLeave()

  return (
    <div>
      <h3>UsePreventLeave</h3>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

export default UsePreventLeave;