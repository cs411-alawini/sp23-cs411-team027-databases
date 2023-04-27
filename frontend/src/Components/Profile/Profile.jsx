import {Box,Button,SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useRef } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import loggedIn from '../../index.js'
import {useState, useEffect,setError} from "react"
import { ChakraProvider } from '@chakra-ui/react'


export default function Profile(props) {
  const us = props.userName;
  const uRef = useRef(null);
  const pRef = useRef(null);
  const [Fav, setFav] = useState([])




  function handleClick() {
    console.log(uRef.current.value);
    let input1 = document.getElementById('firstName');
         // clear the input field.
         input1.value = "";
  }
  async function dUser(user) {
    await axios.get('http://localhost:3001/delete/'+user)
      .then(result => {
        let x=document.getElementsByClassName("update_profile");
        x[0].innerText= user + "'s account deleted!";
      }) 
      .catch(e=>console.log(e))
  }
  async function updateUser(user,pw) {
    await axios.get('http://localhost:3001/update/'+user + '/' + pw)
      .then(result => {
  
          let x=document.getElementsByClassName("update_profile");
        x[0].innerText= user + "'s password updated!";
          
  
  
          
      }) 
      .catch(e=>console.log(e))
  }
  function Deletef() {
    dUser(us)
    loggedIn.logged = false;


  }
  function UpdateUser() { 
    updateUser(us,pRef.current.value)
    

  }

  useEffect(() => {
    console.log("Hello")
    async function requests() {
      await axios.get('http://localhost:3001/fav/'+us)
        .then(result => {
            console.log(result['data'])
            setFav(result["data"])
        }) 
        .catch(e=>setError(e))
    }
    requests()
}, [])

   if (loggedIn.logged == false) {
      return (<Link to={'/login'}><Button colorScheme="green" variant="solid" >You must be logged-in, click to login</Button></Link>);
   }
 else {    
    return (
      <div>
       <h>Profile</h> 
        <div>
        <h1>Update Password</h1>
            
        <h2 className = "update_profile"></h2>
        <input className="form__input" ref={pRef} type="text" id="pw" placeholder="New Password"/>

        <Button colorScheme="green" variant="solid" onClick={UpdateUser}>Update</Button>

        </div>
        <div>
        <h1>Delete User</h1>
        <Button colorScheme="red" variant="solid" onClick={Deletef}>Delete</Button>
        
      </div>
      <div>
      <h1>My Reviews</h1>
      <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
        {Fav.map(item => <Box bg="gray">Game Name: {item.GameName}, Review: {item.Review}, Rating: {item.Rating}</Box>)}
      </SimpleGrid>
      <div>
      </div>
        
      </div>
      </div>
    );
 }
    
}
