import { Margin } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import LoginForm from "../components/UI/LoginForm";
import SignUpForm from "../components/UI/SignUpForm";
import { Row, Col } from "reactstrap";
import "../styles/myaccounts.css";
import { padding } from "@mui/system";
import Dashboard from "../components/UI/Dashboard";
import {getAuth} from 'firebase/auth';
import TokenContext from "../context/tokenContext/tokenContext";
import { useAuth } from "../context/authContext";

const MyAccounts = () => {

  // const [auth,setAuth] = useState(false ||
  //   window.localStorage.getItem('auth') === 'true'
  // );
  // const [token,setToken] = useState('');

  const {userLoggedIn} = useAuth()

  const {setToken} = useContext(TokenContext)

  useEffect(() => {
    getAuth().onAuthStateChanged((userCred) => {
      if(userCred){
        // window.localStorage.setItem('auth','true');
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }else{
        console.log(userCred);
        console.log("User is logged out");
      }
    });
  },[setToken]);



  return (
    <>

    { userLoggedIn ? (
      <>
        <Dashboard/>
      </>
    ) : (
      <>
        <Row>
          <Col lg="6">
            <div style={{ width: "60%", margin: "65px 3px 108px 55px" ,"padding" : "30px"}} className="">
              <LoginForm />
            </div>
          </Col>
          <Col lg="6">
            <div style={{ width: "90%", margin: "65px 3px 108px 55px" ,"padding" : "30px" }} className="">
              <SignUpForm />
            </div>
          </Col>
        </Row>
      </>
    )}

      
    </>
  );
};

export default MyAccounts;
