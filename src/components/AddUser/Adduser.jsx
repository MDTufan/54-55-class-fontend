import ("../Home.css/Home.css")


import React, { useState } from 'react'



const Adduser = () => {

//   const users =useLoaderData();
// console.log(users);
  const [user,serUser]=useState();

  // console.log(user);


const handleonSubmit=(event)=>{
  event.preventDefault();
  // console.log("Click");
fetch("http://localhost:3001/user",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(user)

})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.acknowledged){
    alert("User Added SuccessFully")
    event.target.reset()
  }


})
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
        <form className='xx mt-5 mb-5 text-center' onSubmit={handleonSubmit}>
      <h1>Add User</h1>
  <div className="mb-3 " >
    <label for="exampleInputEmail1" >Name:</label>
    <input  onBlur={HandleOnBlor} type="text" name="name" className="form-control" id="exampleInputEmail1"/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" >Email:</label>
    <input onBlur={HandleOnBlor}  type="email" name="email" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn bg-warning py-2 px-4 rounded mx-2">Add User</button>
</form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Adduser
