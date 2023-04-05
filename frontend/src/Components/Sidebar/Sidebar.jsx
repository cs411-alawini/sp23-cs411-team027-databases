import React from 'react'
import { NavLink } from 'react-router-dom'
import {List, ListItem, ListIcon} from '@chakra-ui/react'
import {CalendarIcon, AtSignIcon} from "@chakra-ui/icons"


export default function Sidebar() {
  return (
    <List color="black" fontSize="1.2em" spacing={4}>
        <ListItem>
            <NavLink to="/">
                <ListIcon as={CalendarIcon} color="black" />
                Dashboard
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/profile">
                <ListIcon as={AtSignIcon} color="balck" />
                Profile
            </NavLink>
        </ListItem>
    </List>
  )
}
