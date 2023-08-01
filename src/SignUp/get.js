
import { useState, useEffect } from "react";

export default function Car() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://crudcrud.com/api/8d4c45d810bc45c5bc3ddd57e4491393/user_add`)

      .then((response) => {
       console.log(response.json)     
        return response.json();
      })
       //try block
      .then((actualData) => {
        console.log(actualData)
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({_id,firstName,lastName,email,password}) => (
            <li key={""}>
              <h3>{firstName}</h3>
              <h3>{lastName}</h3>
              <h3>{email}</h3>
              <h3>{password}</h3>
            </li>
          ))}
      </ul>
      {/* <ul>
        {data &&
          data.map((item,index) => (
            <li key={index}>
             <h3>{item.id}</h3>
             <h3>{item.title}</h3>
              
            </li>
          ))}
      </ul> */}
    </div>
  );
}
