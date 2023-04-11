import {Box,Button,SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom";

export default function Home(props) {
  
  
    return (
      <div>Action Games
      <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
        {props.actionGames.map(item => <Link bg="white" height="200px" border="1px solid" to="/game-profile" state={{name: item.GameName}} >{item.GameName}</Link>)}
      </SimpleGrid>
      </div>
    )

    
}