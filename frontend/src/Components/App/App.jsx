import * as React from "react"
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
} from 'react-router-dom'
import {useState, useEffect} from "react"
import { ChakraProvider } from '@chakra-ui/react'

import './App.css'
import Navbar from '../Navbar/Navbar'
import Profile from "../Profile/Profile"
import Home from "../Home/Home"
import RootLayout from "../RootLayout"


const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path = "/" element ={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path = "navbar" element={<Navbar />} />
            <Route path = "profile" element={<Profile />} />
        </Route>
    )
)

export default function App() {
    const [userName, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")

    return(
        <div className="app">
            <RouterProvider router={router} />
        </div>
    )
}

{/* <BrowserRouter>
    <main>
        console.log("Hi from before calling navbar") 
        <Navbar userName = {userName} setUsername = {setUsername} firstName = {firstName} setFirstName = {setFirstName}/>
        console.log("Hi from after calling navbar") 
    </main>
</BrowserRouter>  */}