import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from '../components/BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import ExerciseCard from './ExerciseCard'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({data, setBodyPart, bodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
        <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
        >
           {isBodyParts ? <BodyPart  item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
           :<ExerciseCard exercise={item}/>}
           
        </Box>
        ))}
    </ScrollMenu>
  )
  // passing props to the BodyPart component from search exercises to render it differently now. set the props up in the search exercises horizontal scroll bar self closing tag to access them here.
}

export default HorizontalScrollBar