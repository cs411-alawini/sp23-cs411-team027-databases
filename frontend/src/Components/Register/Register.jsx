import {Box,Button,LinkBox,SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import {useRef} from 'react';
import axios from 'axios';

import "./Register.css"

export default function Register(props) {
  const uRef = useRef(null);
  const pasRef = useRef(null);

  function handleClick() {
    console.log(uRef.current.value);
    console.log(pasRef.current.value);
        let x=document.getElementsByClassName("register_update");
        x[0].innerText= uRef.current.value + "'s account created!";
    /*let input1 = document.getElementById('firstName');
         // clear the input field.
         input1.value = "";
    let input2 = document.getElementById('password');
         // clear the input field.
         input1.value = "";*/
    cUser(uRef.current.value,pasRef.current.value)
  }
  async function cUser(user,pass) {
    await axios.get('http://localhost:3001/create/'+user+'/'+pass)
      .then(result => {
  
        console.log("AAA");
        
          
      }) 
      .catch(e=>console.log(e))
  }
  
  
  return(
    <div className="form">
        <h2 className = "register_update"></h2>

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
            <Button type="submit" class="btn" onClick={handleClick}>Register</Button>
        </div>
        <div class="footer">
.
        </div>
        <div class="footer">
            <Link type="submit" class="btn" to={'/login'}>Already registered? Click to sign-in.</Link>
        </div>
    </div>      
  )      

    
}
