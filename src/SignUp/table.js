import { useEffect, useState } from 'react';
import './style.css'
function Table(props) {
   const reload = props.data
  const  [getuserData, setUserData] = useState([])
    console.log(getuserData)
    useEffect(() => {
        fetch(`https://crudcrud.com/api/cb29c026157942f0821ddf9667975ae2/user_add`)
    
          .then((response) => {
          
            return response.json();
          })
           //try block
          .then((actualData) => {
            setUserData(actualData)
           
          })
          .catch((err) => {
        console.log(err)
           
          })
         
      }, []);
      useEffect(() => {
   if (reload === true) {
    fetch(`https://crudcrud.com/api/cb29c026157942f0821ddf9667975ae2/user_add`)
    
    .then((response) => {
    
      return response.json();
    })
     //try block
    .then((actualData) => {
      setUserData(actualData)
     
    })
    .catch((err) => {
  console.log(err)
     
    })
   }
         
      }, [reload]);

  return (
    <div>
       <table style={{width:'100%'}}>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
    <th>Password</th>
  </tr>
  {getuserData.map((res) => (
    <tr>
    <td>{res.firstName}</td>
      <td>{res.lastName}</td>
      <td>{res.email}</td>
      <td>{res.password}</td>
      
    </tr>
  ) )}
  
 
  
</table>
    </div>
  )
}

export default Table