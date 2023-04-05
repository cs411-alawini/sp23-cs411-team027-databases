import { Outlet} from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import {Grid,GridItem} from "@chakra-ui/react"
import Sidebar from "./Sidebar/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan={1} minHeight="100.vh" p={30} bg="blue.100" >
        <Sidebar></Sidebar>
      </GridItem>
      <GridItem as="main" colSpan={5} p="20px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}