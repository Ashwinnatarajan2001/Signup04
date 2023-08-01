import React,{useState} from 'react';

import Table from './table';
function SignUp() {
  const [formSubmit, setFormSubmit] = useState(false)
  const [set,setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",

  })
  const handleinput=(event)=>{
    
    const {name,value}=event.target;
    setState((set)=>({
      ...set,
      [name]:value,
    }))
}
const validateEmail = (email)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const submitt=async(e)=>{
  e.preventDefault();
  setFormSubmit(false)
  const response = await fetch('https://crudcrud.com/api/88d753a90c1349638545282f8c495018/user_add', {
      method: 'POST',
      body: JSON.stringify(set),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
    console.log(setState)
  
  if(!set.firstName){
    alert("fill the first name")
    return;
  }
  if(!set.lastName){
    alert("fill the last NAME")
    return;
  }
  if(!set.password){
    alert("fill the last NAME")
    return;
  }
  if(!validateEmail(set.email)) {
    alert("fill the email")
    return;   
}
setFormSubmit(true)

  setState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })
}
    return (
       <div className='"col-md-12"'>

        <div className="row" style={{marginTop:'15%'}}>
        <div className="col-md-6">
        <form onSubmit={submitt}>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputEmail4">FIrstName</label>
      <input type="text" class="form-control" id="firstName" name='firstName' value={set.firstName} placeholder="FIrstName" onChange={handleinput}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">LastName</label>
      <input type="text" class="form-control" value={set.lastName} name='lastName' id="lastName" placeholder="LastName" onChange={handleinput}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="Email" value={set.email} name='email' placeholder="Email" onChange={handleinput}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="Password4" value={set.password} name='password' placeholder="Password" onChange={handleinput}/>
    </div>
  </div>

  
 

  <button type="submit" class="btn btn-primary">Sign in</button>
 
      </form>
             </div>
             <div className="col-md-6">
           <Table data = {formSubmit} />
             </div>
       
        </div>
       
       </div>
       
       
      
     
      );
}

export default SignUp