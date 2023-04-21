import * as React from 'react';
import './DPrehotel.css';
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
        Radisson Blu Hotel
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        In Central Chennai, the Radisson Blu Hotel Chennai City Centre is just over half a mile from Express Avenue and Spencer Mall.
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small"><Link to="/Chotel" id='mar'> SELECT</Link></Button>
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
        Taj Club House
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located off Mount Road and housed in a grand neon-blue building, Taj Club House provides luxurious rooms and suites on Clubhouse
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Chotel" id='mar'> SELECT</Link></Button>
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
        Novotel Chennai OMR
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        Novotel Chennai OMR - An Accor Brand is a 5-star hotel in Chennai spreading across 3 acres of greenery and featuring premium accommodations 
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Chotel" id='mar'> SELECT</Link></Button>
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
        ITC Grand Chola
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located along Mount Road in Chennai, ITC Grand Chola is 5 mi from the Chennai International Airport. It features 10 dining options
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Chotel" id='mar'> SELECT</Link></Button>
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
        The Park Chennai 
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located in Chennai’s business district, standing on the historic premises of the erstwhile Gemini Film Studios.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Chotel" id='mar'> SELECT</Link></Button>
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
       Ibis Chennai OMR 
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Ibis Chennai OMR is located in the IT hall, Sholinganallur on Rajiv Gandhi IT expressway and is 7 minutes from the ECR beaches.
        </Typography>
        
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Chotel" id='mar'> SELECT</Link></Button>
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
    </form>
 
  );

}
export default Media;