import React from 'react';
import useNotification from "../components/UseNotification";

function UseNotification(props) {
  const trriggerNotif = useNotification('Can I steal Your Candy?',{
    body : 'I love Them'
  })
  return (
    <div>
      <h3>useNotification</h3>
      <button onClick={trriggerNotif}>Hello</button>
    </div>
  );
}

export default UseNotification;