import React from 'react'
import { NavLink } from 'react-router-dom'
import {List, ListItem, ListIcon} from '@chakra-ui/react'
import {CalendarIcon, AtSignIcon,Search2Icon} from "@chakra-ui/icons"


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
                <ListIcon as={AtSignIcon} color="black" />
                Profile
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/advancedQuery1">
                <ListIcon as={Search2Icon} color="black" />
                Advanced Query 1
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/advancedQuery2">
                <ListIcon as={Search2Icon} color="black" />
                Advanced Query 2
            </NavLink>
        </ListItem>
    </List>
  )
}
