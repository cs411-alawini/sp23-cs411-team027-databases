import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import {useEffect} from "react"
import {Flex,Box,Heading,Button,Text,Spacer,HStack} from "@chakra-ui/react"

export default function Navbar(props) {
  return (
    <Flex as="nav" p ="10px" alignItems="center" gap="100px">
    </Flex>
  )
}

// export default function Navbar(props) {
//     console.log("Hi from in navbar")
//     const handleLogOut = () => {
//         props.setUserName = ""
//         props.setFirstName = ""
//     }
//     const handleLogIn = () => {
//         //connect to backend and see if user exists
//         //if user doens't exist: alert error
//         //if user exists: change state variables, retrieve all other info of user
//     }

//     return (
//         // <div className="Navbar">Hello from Navbar</div>
//         <div className="navbar">
//             <div className="left">
//               <Link to="/">
//                 <h1 >Home</h1>
//               </Link>
//               {/* <Link to="/login">
//                 <h1>Login</h1>
//               </Link> */}
//               <h1 >
//               {props.username === "" ?
//                 <button className="login button">
//                     Login
//                 </button>
//                 : 
//                 <button className="log-out button" onClick={handleLogOut}>Log Out</button>
//               }
//               </h1> 
//             </div>
//         </div>
//       )
// }