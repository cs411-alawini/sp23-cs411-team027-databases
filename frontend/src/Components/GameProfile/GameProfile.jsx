import React from 'react';
import axios from 'axios'
import {useState, useEffect } from 'react'
import  FocusLock from "react-focus-lock"


import "./GameProfile.css";
import  {useLocation, useParams}  from 'react-router-dom'
import {SimpleGrid, Box, Button, Portal, FormControl, FormLabel, Input, Stack, ButtonGroup, IconButton, Icon} from '@chakra-ui/react'
import { EditIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor, 
  useDisclosure
} from '@chakra-ui/react'


// 1. Create a text input component
const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})

// 2. Create the form
const Form = ({ firstFieldRef, onCancel, gameName, userName }) => {
  const [review,setReview] = useState("")
  const [rating,setRating] = useState(0)

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  // const handleReviewSubmit = () => {
  //   // Do something with the rating and review values here
  //   console.log('Rating:', rating);
  //   console.log('Review:', review);
  // };

  return (
    <Stack spacing={4}>
      <TextInput label='Rating out of 100' id='rating' ref={firstFieldRef} defaultValue='' onChange={handleRatingChange}/>
      <TextInput label='Review' id='review' defaultValue='' onChange={handleReviewChange}/>
      <ButtonGroup display='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={()=>onReviewSubmit(userName, gameName, review, rating, onCancel)} colorScheme='teal'>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

async function onReviewSubmit(userName, gameName, rev,rating) {
  await axios.post('http://localhost:3001/createNewReview/' + userName + '/' + gameName + '/' + rev +'/' + rating)
    .then(result => {
        console.log(result)
      }) 
    .catch(e=>console.log(e))
}

async function setdef(setData2,name) {
  await axios.get('http://localhost:3001/gameInfo/'+name)
    .then(result => {

        console.log(result['data'])
        setData2(result['data'])
    }) 
    .catch(e=>console.log(e))
}

async function getGameReviews(setGameReviews,name) {
  await axios.get('http://localhost:3001/gameReviews/'+name)
    .then(result => {
        console.log("review from databse", result['data'])
        setGameReviews(result['data'])
    }) 
    .catch(e=>console.log(e))
}

async function getGameRatings(setGameRatings,name) {
  await axios.get('http://localhost:3001/gameRating/'+name)
    .then(result => {
        console.log("review from databse", result)
        setGameRatings(result['data'])
    }) 
    .catch(e=>console.log(e))
}


export default function Profile(props) {
  const { userName } = useParams();
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  const location = useLocation()
  const name  = location.state.name

  const [data2, setData2] = useState([])
  const [gameReviews, setGameReviews] = useState([])
  const [gameRatings, setGameRatings] = useState([])
  const go = {'name': name}
   
  console.log(data2)
  useEffect(() => {
    setdef(setData2,name)
    getGameReviews(setGameReviews,name)
    getGameRatings(setGameRatings, name)
  },[])
  console.log("gamerevs: ", gameReviews)

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

            {
              userName == "" ? 
                <div></div> : 
                <div>
                  <Popover
                    isOpen={isOpen}
                    initialFocusRef={firstFieldRef}
                    onOpen={onOpen}
                    onClose={onClose}
                    placement='right'
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Button>Add a Review and Rating</Button>
                    </PopoverTrigger>
                    <PopoverContent p={5}>
                      <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <Form firstFieldRef={firstFieldRef} onCancel={onClose} gameName={name} userName = {userName}/>
                      </FocusLock>
                    </PopoverContent>
                  </Popover>
                </div>
            }
            <div className="paragraphy">
                <p>{item.Description} </p>
            </div>

            <div className='Reviews'>
              <h2 className='ReviewsHeader'>Reviews: </h2>
              {
                gameReviews.map(item => {
                  return(
                  <div className='singleReview'>
                    {item.userName},
                    {item.Review},
                    {item.Rating}
                  </div>)
                })
              }
            </div>

          </div>          
      )}
    </div>
  )
}


