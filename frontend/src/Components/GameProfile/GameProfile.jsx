import React from 'react';
import axios from 'axios'
import {useState, useEffect } from 'react'

import "./GameProfile.css";
import  {useLocation, useParams}  from 'react-router-dom'
import {SimpleGrid, Box, Button} from '@chakra-ui/react'



async function setdef(setData2,name) {
  await axios.get('http://localhost:3001/gameInfo/'+name)
    .then(result => {

       // console.log(result['data'])
        setData2(result['data'])
    }) 
    .catch(e=>console.log(e))
}

<<<<<<< HEAD


export default function Profile(props) {
    console.log(props)
    
    const location = useLocation()
    const name  = location.state.name
   

    const [data2, setData2] = useState([])
    const go = {'name': name}
   
  
 // console.log(data2)
  useEffect(() => {setdef(setData2,name)},[])

    return (
      
      <div>
        {data2.map(item => 
            <div>
              <div className="container">
                <img src={item.Image} alt="Centered" style={{ transform: 'scale(0.5)' }}/>
              </div>     
              <div className="kant">
                <h1>{name} </h1>
              </div>
              <div className="kant">
                  <h1>Rating: {item.Rating} /100</h1>
              </div>
              <div className="kant">
                  <h1>Genre: {} </h1>
              </div>
              <div className="paragraphy">
                  <p>{item.Description} </p>
              </div>    
            </div>          
        )}
      </div>
    )
=======
async function getGameReviews(setGameReviews,name) {
  await axios.get('http://localhost:3001/gameReviews/'+name)
    .then(result => {
        console.log(result['data'])
        setGameReviews(result['data'])
    }) 
    .catch(e=>console.log(e))
}



export default function Profile(props) {
  console.log(props)
  
  const location = useLocation()
  const name  = location.state.name
  

  const [data2, setData2] = useState([])
  const [gameReviews, setGameReviews] = useState([])
  const go = {'name': name}
   
  console.log(data2)
  useEffect(() => {
    setdef(setData2,name)
    getGameReviews(setGameReviews,name)
  },[])

  return (
    <div>
      {data2.map(item => 
          <div>
            <div className="container">
              <img src={item.Image} alt="Centered" style={{ transform: 'scale(1)' }}/>
            </div>     
            <div className="kant">
              <h1>{name} </h1>
            </div>
            <div className="kant">
                <h1>Rating: {item.Rating} /100</h1>
            </div>
            <div className="kant">
                <h1>Price: {item.Price} </h1>
            </div>
            {/* {
              props.userName = "" ? 
                <div></div> : 
                <button className='AddRevButton' onClick={}>Add Your Review</button>
            } */}
            <div className="paragraphy">
                <p>{item.Description} </p>
            </div>
            <div className='Reviews'>
              <h2 className='ReviewsHeader'>Reviews: </h2>
              {
                gameReviews.map(item => {
                  <div className='singleReview'>
                    {item.User}
                    {item.Review}
                  </div>
                })
              }
            </div>

          </div>          
      )}
    </div>
  )
>>>>>>> 73b75545cfac2eaf53e1c25a37b3502b5775a8e3
}


