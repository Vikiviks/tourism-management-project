import React, {useState} from 'react'
import './Slider.css'
import {Link,useNavigate} from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import {Stack,Box} from '@mui/material';
import './DPrehotel.css'

import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Slider() {
  



  

    return (
        <div>
          <div>
          
   
 
    
          <Link to="/Kolkata" id='kr' ><ArrowBackIcon/></Link>
          
   
        <Stack direction="row" spacing={2}>
            
         
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab81' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-max-1mb.gif"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Your Booking is Confirmed
        </Typography>
       

      </CardContent>
      <CardActions >
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
        </div>
        </div>
        
    )
}