import './Bengaluru.css';
import {Link, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Stack,Box} from '@mui/material';
import ben from './images/ben.jpg';
import { CardMedia } from "@mui/material";


const Bengaluru=()=>{
    const navigate=useNavigate();

    const gotocab =()=>{
        navigate('/Bcab');
    }
    const gotofood =()=>{
        navigate('/Bfood');
    }
    const gotohotel =()=>{
        navigate('/BPrehotel');
    }
    const gotoplace =()=>{
        navigate('/BPreplace');
    }
    return(
       <div className="Bengalurubg">
        <CardMedia component="img" image={ben} id='nas' className="Bengalurubg"></CardMedia>
        <Link to="/Vikie" id='kr' ><ArrowBackIcon/></Link>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotocab} id='btn13'>Cab</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button  onClick={gotofood} id='btn14'>Food</button></Box>
            </Stack>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotohotel} id='btn15'>Hotel</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotoplace} id='btn16'>Places</button></Box>
            </Stack>
       </div>
    )
}
export default Bengaluru;