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


const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path = "/" element ={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path = "navbar" element={<Navbar />} />
            <Route path = "profile" element={<Profile />} />
            <Route path = "advancedQuery1" element={<AdvancedQuery1 />} />
            <Route path = "advancedQuery2" element={<AdvancedQuery2 />} />
        </Route>
    )
)

export default function App() {
    const [userName, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")

    // useEffect(() => {
    //     async function requests() {
    //       await axios.get('http://localhost:3000/')
    //         .then(result => {
    //           setCategorizedRecipes(result.data["all lists"])
    //           setRetrievedRecipes(true)
    //         }) 
    //         .catch(e=>setError(e))
    //     }
    //     if (!retrievedRecipes) {
    //       requests()
    //     }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

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