import React from 'react';
import axios from 'axios'
import {useState, useEffect, Box, SimpleGrid, Button} from "react"

import "./Profile.css";
import { useLocation } from 'react-router-dom'

import logo from '/Users/kaanyigit/Documents/sp23-cs411-team027-databases/frontend/src/logo.svg'; // Tell webpack this JS file uses this image



export default function Profile(props) {
    console.log(props)
    
    const location = useLocation()
    const {name}  = location.state
   
    return (
      
      
      <div>
        
        <div className="container">
        <img src={logo} alt="Centered" style={{ transform: 'scale(0.5)' }}/>
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


