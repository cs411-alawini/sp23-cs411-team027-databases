import {Box,Button,SimpleGrid, Input,Heading} from "@chakra-ui/react"
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import GameProfile from "../GameProfile/GameProfile"



export default function Home(props) {
    const [searchInput, setSearchInput] = useState("")
    const[searchResults, setSearchResults] = useState([])
    const [error, setError] = useState("")
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(500)

    const handleOnSearchSubmit = (event) => {
     // console.log("searchInput", event.target.value)
      setSearchInput(event.target.value)
      handleOnSearchSubmitFxn(event)
    }

    async function handleOnSearchSubmitFxn(event) {
      var input = event.target.value
      var url = "http://localhost:3001/search/"+input+"/"+minPrice+"/"+maxPrice
      await axios.get(url)
          .then(result => {
              console.log("searchResults", result)
              setSearchResults(result["data"][0])
          }) 
          .catch(e=>setError(e))
    }

    const handleMinPriceChange = (event) => {
      console.log("minPrice", event.target.value)
      setMinPrice(event.target.value)
    }

    const handleMaxPriceChange = (event) => {
      console.log("maxPrice", event.target.value)
      setMaxPrice(event.target.value)
    }

    return (
      <div>
        <Input variant='filled' placeholder = 'Search for a Game Name here!' onChange={handleOnSearchSubmit}/>
        minPrice:  
        <input className="minPrice" type="text" id="firstName" placeholder="0" onChange={handleMinPriceChange}/>
        maxPrice: 
        <input className="maxPrice" type="text" id="firstName" placeholder="500" onChange={handleMaxPriceChange}/>

        {searchInput == "" ? 
          <div>
            <Heading as='action-games' size='md'>
              Action Games
            </Heading>
            <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
              {props.actionGames.slice(0,4).map(item => 
                <div>
                  <img src={item.Image} alt="Centered" style={{ transform: 'scale(0.5)' }}/>
                  <Link className="GameName" bg="white" height="200px" border="1px solid" to="/game-profile" state={{name: item.GameName}}>{item.GameName}</Link>
                </div>
                )
              }
            </SimpleGrid>
          </div> :
          <div>
            <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
              {searchResults.map(item => 
                <div>
                  <img src={item.Image} alt="Centered" style={{ transform: 'scale(0.5)' }}/>
                  <Link className="GameName" bg="white" height="200px" border="1px solid" to="/game-profile" state={{name: item.GameName}} >{item.GameName}</Link>
                </div>
              )}
            </SimpleGrid>
          </div>
        }
      </div>
    )

}