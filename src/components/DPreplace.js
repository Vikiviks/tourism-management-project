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
import vedio from "./vedio/Delhi.mp4";
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
        image="https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        India Gate
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
        India Gate is a war memorial located in New Delhi, along the Rajpath. It is dedicated to the 82,000 soldiers, both Indian and British, who died during the First World War and the Third Anglo-Afghan War. India Gate looks stunning at night with the fountain displaying colourful lights
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
        image="https://www.holidify.com/images/cmsuploads/compressed/Qutub_Minar_in_the_monsoons_20170908115259.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Qutub Minar
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
        Qutub Minar is a minaret or a victory tower located in the Qutub complex, a UNESCO World Heritage Site in Delhi's Mehrauli area. With a height of 72.5 metres (238 ft), Qutub Minar is the second tallest monument of Delhi. The surrounding Qutub complex has lush green lawns which are popular picnic spot.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/Humayun-tomb_20170809201316.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Humayun tomb
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
        Humayun's tomb is the final resting place of the Mughal Emperor Humayun. Located in the Nizamuddin East area of Delhi, it is the first garden-tomb in India. This UNESCO World Heritage Site is known for the stunning typical Mughal architecture with Persian influences. 
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
        image="https://www.holidify.com/images/cmsuploads/compressed/9713607938_4bd9507080_b_20180302141225.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Lotus Temple
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
        The Lotus Temple is one of the seven Baha'i House of Worship present around the world. Known for its stunning white petal lotus architecture, iy is one of the most visited establishments in the world.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/Delhi_Red_fort_20190312151147.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Red Fort
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
        The Red Fort is a historical fort in the old Delhi area, on the banks of Yamuna. Shah Jahan constructed it in 1639 as a result of a capital shift from Agra to Delhi.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/attr_wiki_1765_20191212124429.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Lodhi Gardens
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
        Lodhi Gardens is a city park placed in New Delhi, spanning over 90 acres. It is a luscious garden that houses the tombs of Sayyid ruler Mohammed Shah and Lodhi King Sikandar Lodhi.
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