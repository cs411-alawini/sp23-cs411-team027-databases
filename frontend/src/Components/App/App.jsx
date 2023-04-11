import * as React from "react"
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
} from 'react-router-dom'
import {useState, useEffect} from "react"
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios'

import './App.css'
import Navbar from '../Navbar/Navbar'
import Profile from "../Profile/Profile"
import Home from "../Home/Home"
import RootLayout from "../RootLayout"
import AdvancedQuery1 from "../AdvancedQuery/AdvancedQuery1"
import AdvancedQuery2 from "../AdvancedQuery/AdvancedQuery2"
import GameProfile from "../GameProfile/GameProfile"




export default function App() {
    const [userName, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [actionGames, setActionGames] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        console.log("Hello")
        async function requests() {
          await axios.get('http://localhost:3001/display')
            .then(result => {
                console.log(result)
                console.log(result['data'])
                setActionGames(result["data"])
            }) 
            .catch(e=>setError(e))
        }
        requests()
    }, [])

    console.log(actionGames)

    const router = createBrowserRouter(
        createRoutesFromElements (
            <Route path = "/" element ={<RootLayout />}>
                <Route index element={<Home actionGames={actionGames}/>}/>
                <Route path = "navbar" element={<Navbar />} />
                <Route path = "game-profile" element={<GameProfile />} />
                <Route path = "advancedQuery1" element={<AdvancedQuery1 />} />
                <Route path = "advancedQuery2" element={<AdvancedQuery2 />} />
                <Route path = "profile" element={<Profile />} />
            </Route>
        )
    )

    return(
        <div className="app">
            <RouterProvider router={router} />
        </div>
    )
}


