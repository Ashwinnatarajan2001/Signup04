import React,{useState} from 'react'
import Tableupdata from './tableupdata';
function Updata() {
    const [setSubmit,formSubmit]=useState(false)
    const [set,setState]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        city:"",
        state:"",
        zip:"",
    })
    const handleinput=(event)=>{
    
        const {name,value}=event.target;
        setState((set)=>({
          ...set,
          [name]:value,
        }))
    }
    const Submit=async(e)=>{
        formSubmit(false)
        console.log(set)
    e.preventDefault();
    const response = await fetch('https://crudcrud.com/api/2683ee8492ca41c8ab99703d66c072c7/user_add', {
      method: 'POST',
      body: JSON.stringify(set),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
    formSubmit(true)
    setState({
        firstName:"",
        lastName:"",
        userName:"",
        city:"",
        state:"",
        zip:"",
    })
    }
  return (
    <div>
        <form onSubmit={Submit}>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="firstName" placeholder="First name" value={set.firstName} name='firstName' onChange={handleinput} required/>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="lastName" placeholder="Last name" value={set.lastName} name='lastName' onChange={handleinput} required/>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="userName" placeholder="Username" value={set.userName} name='userName' onChange={handleinput} aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" id="city" value={set.city} name='city' placeholder="City" onChange={handleinput} required/>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="state" value={set.state} name='state' placeholder="State" onChange={handleinput} required/>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="zip" value={set.zip} name='zip' placeholder="Zip" onChange={handleinput} required/>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
<div className='table'>  
  <Tableupdata data={setSubmit}/>
</div>
    </div>
  )
}

export default Updata