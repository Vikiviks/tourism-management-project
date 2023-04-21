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
        Summit Hermon Hotel 
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located in Darjeeling, 10 km from Tiger Hill, Summit Hermon Hotel & Spa provides accommodation with a restaurant, free private parking and a shared lounge.
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
        Villa Everest 
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located just 1 km from the famous Mall road, Villa Everest is located in Darjeeling. The property offers spacious rooms with a mountain view. Free WiFi is available in the public areas
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
        Sinclairs Darjeeling 
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        Situated within 500 metre from Chowrasta town square, Sinclairs Darjeeling offers breathtaking views of Kanchendzonga on a clear day.Hotel is clean and everything as expected.
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
        Summit Grace Boutique Hotel
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Offering panoramic views of the Singalila Range, Summit Grace Boutique Hotel & Spa features cosy rooms with a TV and sofa seating area.
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
        Hotel Tower View
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Hotel Tower View is offering accommodation in Darjeeling and is located around 10 km from Tiger Hill. Free WiFi is available. At the hotel, the rooms are fitted with a desk.
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
        Humro Himalayan Orchid 
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located in Darjeeling, 11 km from Tiger Hill, Humro Himalayan Orchid features views of the city.Hotel is clean and everything as expected., And the view at sunrise is spectacular.
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