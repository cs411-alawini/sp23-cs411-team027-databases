import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react"

import {SimpleGrid, Box, Button} from '@chakra-ui/react'

async function AQ1_button(setData2) {
    await axios.get('http://localhost:3001/adv2')
      .then(result => {
          console.log(result['data'])
          setData2(result['data'])
      }) 
      .catch(e=>console.log(e))
}

export default function AdvancedQuery2() {
    const [data2, setData2] = useState([])
    return(
        <div className='advancedQuery1Data'>
            <div className='AQ2'>
                Would you like to see games, including their ratings and required age, where the game is both a Multiplayer and Action game?
            </div>
            <Button className="AQ2_button" colorTheme='blue' variant='solid' onClick={()=>AQ1_button(setData2)}>
                Yes!
            </Button>
            {/* {!data1 ? 
                <div></div> :  */}
                <div>
                    {/* Results  */}
                    <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
                        {data2.map(item => 
                            <Box bg="white" height="200px" border="1px solid" >
                                {["Game Name: ", item.GameName, " ; Rating: ", item.Rating, " ; RequiredAge: ", item.RequiredAge]}
                            </Box>
                        )}
                    </SimpleGrid>
                </div>
            {/* } */}
        </div>
    )
}