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
        The Oberoi Bengaluru
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Award-winning gardens with century-old raintrees are featured throughout The Oberoi Bangalore, a 5-star property on the prestigious Mahatma Gandhi Road. Exceptional service
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small"><Link to="/Bhotel" id='mar'> SELECT</Link></Button>
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
        Holiday Inn Bengaluru
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Conveniently located along Sheshadri Road across Bangalore turf club, Holiday Inn Bengaluru Racecourse overlooks the Bangalore Turf Club ensuring great views.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Bhotel" id='mar'> SELECT</Link></Button>
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
        Welcomhotel by ITC Hotels
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        Offering an outdoor pool, a fitness center and a spa. Welcomhotel by ITC Hotels, Richmond Road, Bengaluru is located in Bangalore, just 23 mi away from Kempegowda International airport.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Bhotel" id='mar'> SELECT</Link></Button>
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
        The Leela Palace Bengaluru
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Nestled in the midst of lush gardens that spread across 7 acres, The Leela Palace Bangalore features décor reflecting the grandeur of the bygone era and features of facilities like outdoor.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Bhotel" id='mar'> SELECT</Link></Button>
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
        Radisson Blu Atria Bengaluru
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Offering the facilities and benefits of an outdoor swimming pool and fitness center, Radisson Blu Atria, Bengaluru is located at a 45-minute drive from Kempegowda International Airport.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Bhotel" id='mar'> SELECT</Link></Button>
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
        Hyatt Centric 
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        The modern lifestyle 5 star hotel, Hyatt Centric MG Road Bangalore is located in the heart of Bangalore, also known as India's Silicon Valley overlooking Ulsoor Lake and the cityscape
        </Typography>
        
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Bhotel" id='mar'> SELECT</Link></Button>
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
    </form>
 
  );

}
export default Media;