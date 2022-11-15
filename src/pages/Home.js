import React , { useState }from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {

  // make new state to display our search results
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises , setExercises] =useState([])

  // use state has to be used here due to the component being used globally on all pages not just in the case of searchexercises search.

  // searchexercises can now be passed props and pass them all 3 that it needs
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
      setExercises={setExercises}
      exercises={exercises}
      bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home