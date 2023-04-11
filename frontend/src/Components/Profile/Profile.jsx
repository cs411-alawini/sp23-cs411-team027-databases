import {Box,Button,SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useRef } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Profile(props) {
  const uRef = useRef(null);
  const pRef = useRef(null);
  const urRef = useRef(null);


  function handleClick() {
    console.log(uRef.current.value);
    let input1 = document.getElementById('firstName');
         // clear the input field.
         input1.value = "";
  }
  async function dUser(user) {
    await axios.get('http://localhost:3001/delete/'+user)
      .then(result => {
  
          console.log('success')
          
  
  
          
      }) 
      .catch(e=>console.log(e))
  }
  async function updateUser(user,pw) {
    await axios.get('http://localhost:3001/update/'+user + '/' + pw)
      .then(result => {
  
          console.log('success update')
          
  
  
          
      }) 
      .catch(e=>console.log(e))
  }
  function Deletef() {
    dUser(uRef.current.value)
    

  }
  function UpdateUser() { 
    updateUser(urRef.current.value,pRef.current.value)
    

  }
  
    return (
      <div>
        <div>
        <h1>Update Password</h1>
        <input className="form__input" ref={urRef} type="text" id="firstName" placeholder="Username"/>
        <input className="form__input" ref={pRef} type="text" id="pw" placeholder="New Password"/>

        <Button colorScheme="green" variant="solid" onClick={UpdateUser}>Update</Button>

        </div>
        <div>
        <h1>Delete User</h1>
        <input className="form__input" ref={uRef} type="text" id="firstName" placeholder="Username"/>
        <Button colorScheme="red" variant="solid" onClick={Deletef}>Delete</Button>
        
      </div>
        
      </div>
    )

    
}
