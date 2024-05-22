
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth';

function DashboardContent({token}) {

  const [currentUser,setCurrentUser] = useState('');

  // useEffect(() => {
  //   if(token){
  //     fetchData(token);
  //   }
  // },[token])


  // const fetchData = async (token) => {
  //   const res = await axios.get('http://127.0.0.1:5001/car-rental-apis/us-central1/app/api/todos',{
  //     headers:{
  //       Authorization: 'Bearer '+ token,
  //     },
  //   });

  //   console.log(res.data);
  // }

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  })


  return (
    <>
      {/* <p>Hello piyush (not piyush? Log out)</p> */}
      {currentUser &&  
        <>
          <img src={currentUser.photoURL} width='100' height='100' alt="avatar" />
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
        </>
      }
      <hr/>
      <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
    </>
  )
}

export default DashboardContent

