import React, {useState} from "react";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../config/auth";

const LoginForm = () => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [isSigningIn,setIsSigningIn] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!isSigningIn){
      setIsSigningIn(true);
      doSignInWithEmailAndPassword(email,password)
    }
  }

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    if(!isSigningIn){
      setIsSigningIn(true);
      await doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      })
    }
  }

  // const loginWithGoogle = () => {
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth,provider)
  //     .then((userCred) => {
  //       if(userCred){
  //         setAuth(true);
  //         window.localStorage.setItem('auth','true');
  //       }
  //     }).catch(error => {
  //       console.log('Error Signing in:',error);
  //     })
  // };

  return (
    <>
      <h3 className="heading">Login</h3>
      <form style={{ padding: "15px" }} className="outline" onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Username or Email address</label>
          <span className="asterik">*</span>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-3 password-container">
          <label>Password</label>
          <span className="asterik">*</span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
          <span class="toggle-password" onClick={togglePasswordVisibility} style={{top:'80%'}}>
            <i class="fas fa-eye"></i>
          </span>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <div className="d-grid">
          <button onClick={(e) => {loginWithGoogle(e)}} className="btn btn-primary">Login With Google</button>
        </div>
        <br />
        <p className="forgot-password text-right">
          <a className="red" href="#">Lost your password?</a>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
