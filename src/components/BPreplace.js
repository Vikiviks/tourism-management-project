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
import vedio from "./vedio/Bangalore.mp4";
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
        image="https://www.holidify.com/images/cmsuploads/compressed/nandi-hills-371584_960_720_20180710112813.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nandi Hills
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
        Nandi Hills is a scenic hill station situated close to Bangalore, serving as one of the most popular destinations for trekking of Karnataka and escaping the busy city life of Bangalore.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_154851008_20200123162547_20200123162603.png"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lalbagh
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
        Lalbagh botanical garden is home to numerous birds and wildlife and has a lake. It is popular for flower shows conducted here during Republic Day and Independence Day week.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/BangalorePalace16_20190904100428_20190904100439.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bengalore palace
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
        The majestic Bangalore palace is a royal palace known for its architecture with beautiful carvings both inside and outside. It is owned by the Mysore Royal family. The sprawling grounds around the palace is ideal for a picnic
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
        image="https://www.holidify.com/images/cmsuploads/compressed/C1_20170905112652.PNG"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cubbon Park
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
        Cubbon Park is the most famous attraction in Bangalore. In addition to being a natural sightseeing destination, Attara Kacheri, Cubbon Park Museum, Bangalore Aquarium and Sheshadri Iyer Memorial Park are also situated here.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_Church_street_trees_3_20210628130018.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Church Street 
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
        Church Street in Bangalore is one of the busiest and most beloved streets, named after St. Mark’s Cathedral. It is lined with gift shops, music shops, bookstores, restaurants and cafes, some of them being the oldest in the city, all selling a wide variety of products and tasty treats.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/4140_20190823122408.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ISKCON 
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
        ISKCON Bangalore is one of the largest Krishna Hindu temples in the world. The cultural complex accommodating dedicated deities of Sri Sri Radha Krishnachandra, Sri Sri Krishna Balarama, Sri Sri Nitai Gauranga, Sri Srinivasa Govinda and Sri Prahlada Narasimha.
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