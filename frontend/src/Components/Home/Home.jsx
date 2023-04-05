import {Box,SimpleGrid} from "@chakra-ui/react"

export default function Home() {
    return (
      <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
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
        <Box bg="white" height="200px" border="1px solid" ></Box>
        <Box bg="white" height="200px" border="1px solid" ></Box>
      </SimpleGrid>
    )
}