import React,{useEffect,useState} from 'react'
import './updata.css'
function Tableupdata(props) {
    const reload=props.data
    const [setGet,setGetuser]=useState([])
    useEffect(() => {
        fetch(`https://crudcrud.com/api/af4ac19d42fb4e17bb688549eefa4898/user_add`)
    
          .then((response) => {
          
            return response.json();
          })
           //try block
          .then((actualData) => {
            setGetuser(actualData)
           
          })
          .catch((err) => {
        console.log(err)
           
          })
         
      }, []);
      useEffect(() => {
        if(reload===true){
        fetch(`https://crudcrud.com/api/af4ac19d42fb4e17bb688549eefa4898/user_add`)
    
          .then((response) => {
          
            return response.json();
          })
           //try block
          .then((actualData) => {
            setGetuser(actualData)
           
          })
          .catch((err) => {
        console.log(err)
           
          })
        }
      }, [reload]);
  return (
    <div style={{width:"70%"}}>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Username</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>

    </tr>
  </thead>
  
    {setGet.map((res)=>(
    <tr>
      <td>{res.firstName}</td>
      <td>{res.lastName}</td>
      <td>{res.userName}</td>
      <td>{res.city}</td>
      <td>{res.state}</td>
      <td>{res.zip}</td>
    </tr>
  ))}
    
  
</table>
    </div>
  )
}

export default Tableupdata