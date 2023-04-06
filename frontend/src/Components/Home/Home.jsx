import {Box,SimpleGrid} from "@chakra-ui/react"

export default function Home(props) {
    console.log(props)
    // <tbody>
    //   {items.map(item => <ObjectRow key={item.id} name={item.name} />)} 
    // </tbody>
    return (
      <div>Action Games
      <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
        {props.actionGames.map(item => <Box bg="white" height="200px" border="1px solid" >{item.GameName}</Box>)}
        {/* <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>

        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>

        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box> */}
      </SimpleGrid>
      </div>
    )
}