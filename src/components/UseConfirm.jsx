import React from 'react';
import useConfirm from "../Hooks/useConfirm";



function UseConfirm(props) {
  const deleteWorld = () => {
    console.log("deleting")
  }
  const abort = () => {
    console.log("Aborted")
  }

  const confirmDelete = useConfirm("are U sure?", deleteWorld, abort)

  return (
    <div>
      <h3>useConfirm</h3>
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  );
}

export default UseConfirm;