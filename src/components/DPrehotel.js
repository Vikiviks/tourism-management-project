import * as React from 'react';
import './DPrehotel.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link,useNavigate} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {Stack,Box} from '@mui/material';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';


const Media=()=>{
  const navigate=useNavigate();

  

    return (
   
        <form action='/'>
          <div>
    <center id=''><br></br>
      <h2><b>Choose your hotel </b></h2>
      <hr />
    </center>
  </div>
        <Stack direction="row" spacing={2}>
            <div>
        <Box>
    <CardActionArea sx={{ maxWidth: 345 }} id='sab8' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7mr86EK5RjKj4fQm0rG7MxBGHBLgCNuSPQ&usqp=CAU"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Taj Palace
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Spread over six acres of lush gardens, offering an outdoor swimming pool and panoramic city views, Taj Palace New Delhi is located in New Delhi
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small"><Link to="/Dhotel" id='mar'> SELECT</Link></Button>
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMpw2G_HzNyb6EsZg449CY7YHIfTCFIOCWg&usqp=CAU"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Welcomhotel by ITC
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located in Asia's largest sub-city of Dwarka, WelcomeHotel offers modern rooms. Guests enjoy free access to the gym and seasonal outdoor pool. 
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Dhotel" id='mar'> SELECT</Link></Button>
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsb3FcjBbp-P7x0nsux6JfRoEfUtmmMs5LFg&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Holiday Inn New Delhi
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        Offering an outdoor swimming pool, a fitness center and a spa and wellness center, Holiday Inn New Delhi International Airport is located in New Delhi
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Dhotel" id='mar'> SELECT</Link></Button>
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UQquj2VvjXWweOrRRa0sUzBPG3fB9Jc2TA&usqp=CAU"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Radisson Blu Plaza 
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located only 1.9 mi away from Indira Gandhi International Airport along the Delhi-Gurgaon Expressway, Radisson Blu Plaza Delhi
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Dhotel" id='mar'> SELECT</Link></Button>
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmvgFxffALppMPtqKyaM5Csc8LusRqtdkEg&usqp=CAU"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Novotel New Delhi
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located at a 7 minutes’ drive from the Indira Gandhi International Airport, Novotel New Delhi International Airport
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Dhotel" id='mar'> SELECT</Link></Button>
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRry_dpFozqM1S2jbmP-9dDTYP99ufDQ9MGIg&usqp=CAU"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Shangri-La Eros
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        The recently refurbished Shangri-La Eros New Delhi offers 5 dining options and an outdoor swimming pool. India Gate is 1.6 mi 
        </Typography>
        
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Dhotel" id='mar'> SELECT</Link></Button>
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
    </form>
 
  );

}
export default Media;