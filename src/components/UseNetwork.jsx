import React, {useEffect, useState} from 'react';

const useNetwork = (onChange)=>{
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === 'function') {
      onChange(navigator.onLine)
    }
    setStatus(navigator.onLine);
  }
  useEffect(()=>{
    window.addEventListener('online',handleChange)
    window.addEventListener('offline',handleChange)
    return () => {
      window.removeEventListener('online',handleChange)
      window.removeEventListener('offline',handleChange)
    }
  },[])
  
  return status ;
}

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