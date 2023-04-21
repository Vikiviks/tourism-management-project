import React, {useState} from 'react'
import './Slider.css'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import {Stack,Box} from '@mui/material';
import './DPrehotel.css'
import vedio from "./vedio/darjeeling.mp4";
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function Slider() {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });



  

    return (
        <div>
          <div>
           <center id=''><br></br>
      <h2><b>Must Visit Destinations</b></h2>
      <p>From historical cities to natural splendours, come see the best of india</p>
      <hr />
    </center>
    <div class="contain1">
                    <video src={vedio} autoPlay loop muted  className='img111'/>
                  

                </div>
 
    
          
            <Stack direction="row" spacing={2}>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_512356807_20200218162340_20200218162403.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Tiger Hills
        </Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={4} readOnly
        icon={<FavoriteIcon fontSize="inherit" readOnly/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"readOnly />}
      />
        <Typography variant="body2" color="text.secondary">
        Tiger Hills make for a perfect sunrise for you. You can see Kurseong to the south along with multiple rivers flowing down. Senchal Wildlife Sanctuary is another nearby attraction you could visit - the place inhabits various high-altitude animals and bird.
        </Typography>
      </CardContent>
      <CardActions >
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.holidify.com/images/cmsuploads/compressed/attr_1398_20190429143506.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Darjeeling Himalayan Railway
        </Typography>
        <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={4} readOnly
        icon={<FavoriteIcon fontSize="inherit" readOnly/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"readOnly />}
      />
        <Typography variant="body2" color="text.secondary">
        A visit to the city of Darjeeling is incomplete without a joyride at the Darjeeling Himalayan Railway toy train. Moving at a snail pace over the hilly terrain, it is an experience no one wants to miss.
        </Typography>
      </CardContent>
      <CardActions >
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.holidify.com/images/cmsuploads/compressed/darjeeling_ropeway_1024_20180315132526.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Darjeeling Ropeway
        </Typography>
        <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={4} readOnly
        icon={<FavoriteIcon fontSize="inherit" readOnly/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"readOnly />}
      />
        <Typography variant="body2" color="text.secondary">
        Darjeeling Ropeway is a cable car circuit where one can witness a myriad of exquisite landscapes, from the glorious snow-capped mountains to the charming valley replete with verdant tea estates.
        </Typography>
      </CardContent>
      <CardActions >
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
   
        <Stack direction="row" spacing={2}>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.holidify.com/images/cmsuploads/compressed/2384_20190314133754.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Batasia loop
        </Typography>
        <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={3.5} readOnly
        icon={<FavoriteIcon fontSize="inherit" readOnly/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"readOnly />}
      />
        <Typography variant="body2" color="text.secondary">
        Located around 5 km from Darjeeling, Batasia loop is a spiral railway track where the toy train takes a complete 360 degree turn. The toy train descends by 1,000 ft. as it completes the loop through a large circular area.
        </Typography>
      </CardContent>
      <CardActions >
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.holidify.com/images/cmsuploads/compressed/IMG_2116_20171201163326.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Himalayan Mountaineering Institute
        </Typography>
        <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={4} readOnly
        icon={<FavoriteIcon fontSize="inherit" readOnly/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"readOnly />}
      />
        <Typography variant="body2" color="text.secondary">
        The Himalayan Mountaineering Institute, commonly known as HMI Darjelling, was established on November 4, 1954 primarily to encourage mountaineering as an organized sport in India. HMI regularly conducts Adventure, Basic and Advanced levels of mountaineering courses which are very comprehensive courses.
        </Typography>
      </CardContent>
      <CardActions >
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.holidify.com/images/compressed/2379.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nightingale Park
        </Typography>
        <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={3} readOnly
        icon={<FavoriteIcon fontSize="inherit" readOnly/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"readOnly />}
      />
        <Typography variant="body2" color="text.secondary">
        This park was earlier called 'The Shrubbery' when it was a private courtyard. The park was closed for renovation for about four years and has reopened for public since 2011. There is a giant statue of Lord Shiva, a musical fountain along with the great scenery.
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