import React from 'react';
import useAxios from "../Hooks/useAxios";

function UseAxios(props) {
  const {loading, data, error, refetch} = useAxios({
    url : 'https://yts.mx/api/v2/list_movies.json',

  });

  return (
    <div>
      <h3>UseAxios</h3>
      <h4>{data && data.status}</h4>
      <p>{loading && "Loading"}</p>

      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default UseAxios;