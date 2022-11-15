import React, {useEffect, useState} from 'react'

import {Box, Button, Stack , TextField, Typography } from '@mui/material'

import {exerciseOptions , fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  // the search exercises props will be coming from the home page which includes singular body parts not the plural BODYPARTS that is in use already.
  const [search, setSearch] = useState('')


  
  // set new state for body parts 
  const [bodyParts, setBodyParts]=useState([])
  //useEffect to fetch data as soon as the page loads
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData();
    // PUTTING THIS HERE CALLS IT IMMEDIATLY WHEN LOADED
    
  },[])

  // [] so we call only at the start of the load




  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      console.log(exercisesData)
      // add search functionality 


      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
        ||item.target.toLowerCase().includes(search)
        ||item.equipment.toLowerCase().includes(search)
        ||item.bodyPart.toLowerCase().includes(search),
      );
      window.scrollTo({top:1800,left:1000,behavior:'smooth' })

      setSearch('');
      setExercises(searchedExercises);

    }
  }
// console logging the data to test the api and the data returned.









  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {lg:'44px', xs:'30px'}
      }} mb="50px" textAlign="center"
      >
        Awesome Exercises You Should Know
      </Typography>

      <Box position='relative' mb="72px">
        <TextField 
        sx={{
          input :{ 
            fontWeight:'700',
            border :'none',
            borderRadius:'4px'
          },
          width: {lg:'800px', xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
        }}
        height="76px"
        value={search}
        onChange= {(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type='text'
        />
        <Button
        className='search-btn'
        sx={{
          bgcolor:'#ff2625'
          , color:'#fff',
          textTransform:'none',
          width: {lg:'175px', xs:'80px'},
          fontSize: {lg:'20px', xs:'14px'} ,
          height :"56px",
          position:"absolute",
          right:'0'

        }}
        onClick={handleSearch}
        >
          Search
        </Button>


      </Box>
      <Box sx = {{ position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>

      </Box>
    </Stack>
  )
}

export default SearchExercises