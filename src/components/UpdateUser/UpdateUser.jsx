import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {


  const storeuser =useLoaderData()
  const [user,serUser]=useState(storeuser);
  const handleUpdate=(event)=>{
    event.preventDefault();
    // console.log("Click");
  fetch(`http://localhost:3001/users/${storeuser._id}`,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(user)
  
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.modifiedCount>0){
      alert(`${storeuser.name} Update SuccessFully`);
     
      
    }
   
  
  
  })
  form.reset()
  
  }

  const HandleOnBlor=(event)=>{
    const Field=event.target.name;
    const value=event.target.value;
    const newuser={...user}
    newuser[Field]=value;
    serUser(newuser)
  
  
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1 className='text-center text-danger'>  Name: {storeuser.name}</h1>

<form className='xx mt-5 mb-5' onSubmit={handleUpdate}>
<h1 className='text-center text-danger'>Add User</h1>
<div className="mb-3 " >
<label for="exampleInputEmail1" >Name:</label>
<input   type="text" onBlur={HandleOnBlor} name="name" defaultValue={storeuser.name} className="form-control" id="exampleInputEmail1"/>

</div>
<div className="mb-3">
<label for="exampleInputPassword1" >Email:</label>
<input   type="email" onBlur={HandleOnBlor} defaultValue={storeuser.email} name="email" className="form-control" id="exampleInputPassword1" />
</div>

<button type="submit" className="btn bg-warning py-2 px-4 rounded mx-2">Update</button>
</form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default UpdateUser;
