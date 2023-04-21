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
import vedio from "./vedio/allahabad.mp4";
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
        image="https://www.holidify.com/images/cmsuploads/compressed/Kumbh_Mela_2013_Sangam,_Allahabd_20180102201717.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Triveni Sangam 
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
        The Triveni Sangam is the junction point of three rivers - Ganga, Yamuna, and Saraswati (which is a mythical river, supposed to have dried up milleniums ago) Both Ganga and Yamuna are extremely revered rivers in Indian mythology, and hence the confluence point of these rivers has attained extremely high religious importance.
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
        image="https://cdn.s3waas.gov.in/s3cd00692c3bfe59267d5ecfac5310286c/uploads/bfi_thumb/2018061542-olwcnk1mxu8jqyvclu1zwg17nx2a0qox7l101vt2tm.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Khusro Bagh 
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
        One of the most popular tourist destinations in Allahabad, Khusro Bagh was built by King Jahangir for his son Khusro. The tombstone of the prince lies in this garden along with that of his mother Shah Begum.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/3875_20200421135150.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anand Bhawan
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
        Anand Bhawan is the former residence of Nehru family which has now been transformed into a museum showcasing various artefacts and articles of the era of Independence movement in India. The double-storey mansion was personally designed by Motilal Nehru. Jawahar Planetarium, the famous planetarium is also situated here.
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
        image="https://www.holidify.com/images/cmsuploads/compressed/3879_20200421144927.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Allahabad Museum
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
        the Allahabad Museum is one of the national-level museums of India. It gives an insight into the history, culture, heritage and independence movement of India through the amazing displays of artefacts related to the art, history, archaeology, architecture, environment and literature
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
        image="https://www.holidify.com/images/cmsuploads/compressed/3877_20200421155425.jpg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Allahabad Fort 
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
        Allahabad Fort is a splendid work of architecture that was built during the reign of Akbar, the Mughal Emperor in 1583. The marvellous structure is located on the banks of the confluence of the Rivers Ganga and Yamuna and is well-known for being the largest fort ever built by Akbar.
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
        image="https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/vaishali/ashokan_pillar__kolhua_vaishali/ashokan-pillar.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ashoka Pillar
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
        Placed outside the Allahabad Fort, this 16th century structure was constructed by Emperor Akbar. The exterior of the Ashoka Pillar has inscriptions from Ashoka in the Brahmi script. Even Samudragupta and Jahangir have added some inscriptions later in the Gupta script, a refined version of Brahmi.
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