import React from 'react';
import {getAuth, signOut} from 'firebase/auth'

function Logout({auth,setAuth}) {

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Clear client-side session data
        window.localStorage.removeItem('auth');
        setAuth(false);
      })
      .catch((error) => {
        console.log('Error Signing Out:',error);
      });
  };


  return (
    <div>
      logout page
      <button onClick={logout} className="btn btn-primary">Logout</button>
    </div>
  )
}

export default Logout;
