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
        City Hotel
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        City Hotel is set in Allahābād. This 2-star hotel offers a 24-hour front desk and a cash machine. A vegetarian breakfast is served each morning at the property
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small"><Link to="/Ahotel" id='mar'> SELECT</Link></Button>
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
        Hotel Polo Max Allahabad 
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Hotel Polo Max Allahabad is set in Allahābād, within 11 km of Phaphamau Junction and 1.7 km of Allāhābād Junction. This 3-star hotel offers a concierge service and a tour desk.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Ahotel" id='mar'> SELECT</Link></Button>
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
        Luxmi Hotel
        </Typography>
        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
        <Typography variant="body2" color="text.secondary">
        Located in Allahābād, 11 km from Phaphamau Junction, Luxmi Hotel features a terrace and views of the city. This 2-star hotel offers a 24-hour front desk, room service and free WiFi.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Ahotel" id='mar'> SELECT</Link></Button>
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
        The Legend 
        </Typography>
        <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />
        <Typography variant="body2" color="text.secondary">
        Situated in Allahābād, 9.2 km from Phaphamau Junction, The Legend features accommodation with a restaurant, free private parking, a shared lounge and a garden.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Ahotel" id='mar'> SELECT</Link></Button>
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
        Hotel Yatrik
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Situated in Allahābād, 10 km from Phaphamau Junction, Hotel Yatrik features accommodation with a restaurant, free private parking, a fitness centre and a shared lounge.
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Ahotel" id='mar'> SELECT</Link></Button>
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
        Hotel CPS CASTLE Club 
        </Typography>
        <Rating name="half-rating-read" defaultValue={3} precision={3} readOnly />
        <Typography variant="body2" color="text.secondary">
        Situated in Allahābād, 11 km from Phaphamau Junction, Hotel CPS CASTLE Club & Resort 2mins from Railway & free private parking, a bar..
        </Typography>
        
      </CardContent>
      <CardActions >
      <Button size="small"><Link to="/Ahotel" id='mar'> SELECT</Link></Button>
      </CardActions>
    </CardActionArea>

            </Box>
            </div>
            
        </Stack>
    </form>
 
  );

}
export default Media;