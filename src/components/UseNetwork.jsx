import React from 'react';
import useNetwork from "../Hooks/useNetwork";

function UseNetwork(props) {
  const handleNetworkChange = (onLine) =>{
    console.log(onLine?"We just went online":"we are Offline")
  }
  const onLine = useNetwork(handleNetworkChange)
  return (
    <div>
      <h3>UseNetwork</h3>
      <p>{onLine? "onLine":"offLine"}</p>
    </div>
  );
}

export default UseNetwork;