import {Box,Button,SimpleGrid, Input,Heading} from "@chakra-ui/react"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import GameProfile from "../GameProfile/GameProfile"

export default function Home(props) {
    const [searchInput, setSearchInput] = useState("")
    const[searchResults, setSearchResults] = useState([])
    const [error, setError] = useState("")

    const handleOnSearchSubmit = (event) => {
      console.log("searchInput", event.target.value)
      setSearchInput(event.target.value)
      handleOnSearchSubmitFxn(event)
    }

    async function handleOnSearchSubmitFxn(event) {
      var input = event.target.value
      var url = "http://localhost:3001/search/"+input
      await axios.get(url)
          .then(result => {
              console.log("searchResults", result)
              setSearchResults(result["data"])
          }) 
          .catch(e=>setError(e))
    }

    return (
      <div>
        <Input variant='filled' placeholder = 'Search for a Game Name here!' onChange={handleOnSearchSubmit}/>

        {searchInput == "" ? 
          <div>
            <Heading as='action-games' size='md'>
              Action Games
            </Heading>
            <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
              {props.actionGames.map(item => <Link bg="white" height="200px" border="1px solid" to="/game-profile" state={{name: item.GameName}} >{item.GameName}</Link>)}
            </SimpleGrid>
          </div> :
          <div>
            <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
              {searchResults.map(item => <Link bg="white" height="200px" border="1px solid" to="/game-profile" state={{name: item.GameName}} >{item.GameName}</Link>)}
            </SimpleGrid>
          </div>
        }
      </div>
    )

}