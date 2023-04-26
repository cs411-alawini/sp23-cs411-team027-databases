import {Box,Button,LinkBox,SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import {useRef} from 'react';
import axios from 'axios';
import {Flex,Heading,Text,Spacer,HStack} from "@chakra-ui/react"

import "./Login.css"
import loggedIn from '../../index.js'

export default function Login(props) {
  const uRef = useRef(null);
  const pasRef = useRef(null);

  function handleClick() {
    console.log(uRef.current.value);
    console.log(pasRef.current.value);
    cUser(uRef.current.value,pasRef.current.value)
  }
  async function cUser(user,pass) {
    await axios.get('http://localhost:3001/searchUser/'+user)
      .then(result => {
          let x=document.getElementsByClassName("login_update");
        console.log(result.data)
        if (result.data.length == 0) {
                      x[0].innerText= "user not found!"

          } else {
              x[0].innerText="user " +user + " logged in!";  
              props.setUsername(user);
          }
          loggedIn.logged = true;
          
      }) 
      .catch(e=>console.log(e))
  }
  
  
  return(
      
    <div className="form">
          
      
      <Heading as="h1">Steam Recommender</Heading>

     
        <div className = "login_update"></div>
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="Username">Username:   </label>
                <input className="form__input" ref={uRef} type="text" id="firstName" placeholder="Username"/>
            </div>
            
            <div className="password">
                <label className="form__label" for="password">Password: </label>
                <input className="form__input" ref={pasRef} type="password"  id="password" placeholder="Password"/>
            </div>
    
        </div>
        <div class="footer">
            <Button type="submit" class="btn" onClick={handleClick}>Login</Button>
        </div>
        <div class="footer">
.
        </div>
        <div class="footer">
            <Link type="submit" class="btn" to={'/register'}>Not registered? Click to sign-up.</Link>
        </div>
    </div>      
  )      

    
}
