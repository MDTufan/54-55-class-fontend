
import React, { useState } from 'react';

import "../Home.css/Home.css"
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const users =useLoaderData()
const[desplyUser,setdesplyUser]=useState(users)

const handldelete=(users)=>{

   const agree=window.confirm(`${users.name} are you went to delete`);
   if(agree){
   fetch(`http://localhost:3001/users/${users._id}`,{
    method:"DELETE"
   })
   
  .then(res=>res.json())
  .then(data=>{
  console.log(data);

  if(data.deletedCount > 0){
    alert(`${users.name} is Delete Successfully`);
    const RamineringUser = desplyUser.filter(usr=> usr._id !== users._id);
    setdesplyUser(RamineringUser)
    
  }
  
})

   }
}

  return (
    <div className=' container design'>
      
      {
            desplyUser.map(users=>
              <div key={users._id} className='xxx text-center'>
              <h3 className='text-primary'>Name:{users.name}</h3>
              <p>Email:{users.email}</p>
              <Link to={`/updateuser/${users._id}`} > <button className='bg-success py-2 px-3 rounded mx-2'>Update</button></Link>
                <button onClick={()=>handldelete(users)} className='bg-danger py-2 px-3 rounded mx-2'>Delete</button>
                

              </div>
              )
          }
    </div>
  );
}

export default Home;
