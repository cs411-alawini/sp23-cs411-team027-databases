import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react"

import './AdvancedQuery1.css' 
import {SimpleGrid, Box, Button} from '@chakra-ui/react'

async function AQ1_button(setData1) {
    await axios.get('http://localhost:3001/adv1')
      .then(result => {
          setData1(result['data'])
      }) 
      .catch(e=>console.log(e))
}

export default function AdvancedQuery1() {
    const [data1, setData1] = useState([])
    return(
        <div className='advancedQuery1Data'>
            <div className='AQ1'>
                Would you like to see games where the price is less than 10 and it's a Multiplayer/Action game, and where the price is greater than 30 and it's a SinglePlayer Game?
            </div>
            <Button className="AQ1_button" colorTheme='blue' variant='solid' onClick={()=>AQ1_button(setData1)}>
                Yes!
            </Button>
            {/* {!data1 ? 
                <div></div> :  */}
                <div>
                    {/* Results  */}
                    <SimpleGrid columns={4} spacing={10} minChildWidth={250} padding={15}>
                        {data1.map(item => 
                            <Box bg="white" height="200px" border="1px solid" >
                                {["Game Name: ", item.GameName, " ; Price: ", item.Price]}
                            </Box>
                        )}
                    </SimpleGrid>
                </div>
            {/* } */}
        </div>
    )
}