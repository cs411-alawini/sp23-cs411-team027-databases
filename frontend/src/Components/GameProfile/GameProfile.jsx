import React from 'react';
import axios from 'axios'
import {useState, useEffect } from 'react'

import "./GameProfile.css";
import  {useLocation, useParams}  from 'react-router-dom'
import {SimpleGrid, Box, Button} from '@chakra-ui/react'


async function setdef(setData2,name) {
  await axios.get('http://localhost:3001/adv3', {
    params: {
      foo: name
    }
  })
    .then(result => {
        console.log(result['data'])
        setData2(result['data'])
    }) 
    .catch(e=>console.log(e))
}



export default function Profile(props) {
    console.log(props)
    
    const location = useLocation()
    const name  = location.state.name
   

    const [data2, setData2] = useState([])
    const go = {'name': name}
   
  
  console.log(data2)
    return (
      
      
      <div>
        <div>
        {/* <Button className="AQ1_button" colorTheme='blue' variant='solid' onClick={()=>setdef(setData2,name)}>
                Yes!
            </Button> */}

        
        
                </div>
        <div className="container">
        <img src={'/frontend/src/logo.svg'} alt="Centered" style={{ transform: 'scale(0.5)' }}/>
        </div>
              <div className="kant">
                <h1>{name} </h1>
              </div>
              <div className="kant">
                  <h1>Rating: {} /5</h1>
              </div>
              <div className="kant">
                  <h1>Genre: {} </h1>
              </div>
            <div className="paragraphy">
                <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sapien sit amet risus pretium, nec pulvinar tortor scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget nulla non mi fringilla volutpat. Donec in vestibulum erat. Maecenas non lorem id leo rutrum tempor. Sed vestibulum eros sit amet aliquam convallis.</p1>
            </div>


      
      </div>
    )
}


