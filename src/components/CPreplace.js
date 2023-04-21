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
import vedio from "./vedio/Chennai.mp4";
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
        image="https://www.holidify.com/images/cmsuploads/compressed/attr_wiki_426_20200726215816.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Marina Beach
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
        Marina Beach is a natural urban beach along the Bay of Bengal. The beach is stretched out to a distance of 13 kilometres making it the longest natural urban beach in the country, second largest in the world and also the most crowded beach in India with almost 30,000 visitors a day. 
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
        image="https://www.holidify.com/images/cmsuploads/compressed/Madras_museum_theatre_in_October_2007_20181129222446.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Government Museum
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
        Government Museum was established in 1851 and is the second oldest museum in the country after the Indian Museum in Kolkata. Situated in Egmore suburb of Chennai, it is built in the Indo-Sarcenic style and houses a rich collection of the works of Raja Ravi Varma.


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
        image="https://www.holidify.com/images/compressed/4242.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        MGR Film city
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
        Having been established in the year 1994, a considerably new structure, the MGR Film city is managed by the Government of Tamil Nadu in loving memory of MG Ramachandran who was not only a crowd-pleasing tamil actor but also a longtime CM of Tamil Nadu.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/MarundeeswararTemple_20191213114249_20191213114305.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Marundeeswarar Temple
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
        The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva in the form of Marundeeswar or Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must visit for anyone visiting Chennai or nearby cities.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/a1_20170927161112.PNG"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Vandalur Zoo
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
        Arignar Anna Zoological Park aka Vandalur Zoo, is a zoological garden located in Vandalur is spread over an area of 602 hectares, including a rescue and rehabilitation centre. The zoo shelters about 3000 species of flora and fauna across twelve hundred acres including 46 endangered species, in its 160 enclosures.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/Valluvar_Kottam_at_Night_20190222095525jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Valluvar Kottam
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
        Valluvar Kottam is an auditorium, with a gigantic capacity to hold 4,000 people, built in remembrance of the poet-saint, Tiruvalluvar. Verses of the poet Tiruvalluvar are embellished on the pillars in and around the auditorium.
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