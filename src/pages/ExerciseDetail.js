import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import Detail from '../components/Detail'

import SimilarExercises from '../components/SimilarExercises'


/// useParams used to know which page and id of ecercise the page is on and add addtional data to that page

/// send exercise detail data to the detail component with state and effects

//populate the state with use effect. with a dependency array that will be called anytime the id is changed.

//fetchData accepts two params which is a Url which needs to be appeneded and the second being the exerciseOptions parameter
/// for similar exercises need to make a second api call

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] =useState([])
  const [equipmentExercises, setEquipmentExercisesData] = useState([])

  const { id } =useParams();

  useEffect(() => {

    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';


      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercisesData(equipmentExercisesData)

    }
    fetchExerciseData();
  },[id])



  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}  />


    </Box>
  )
}

export default ExerciseDetail