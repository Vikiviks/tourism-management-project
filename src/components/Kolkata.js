import './Kolkata.css';
import {Link,useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Stack,Box} from '@mui/material';
import kolkata from './images/kolkata.jpg';
import { CardMedia } from "@mui/material";


const Kolkata=()=>{
    const navigate=useNavigate();

    
    const gotofood =()=>{
        navigate('/Kfood');
    }
    const gotohotel =()=>{
        navigate('/KPrehotel');
    }
    const gotocab =()=>{
        navigate('/Kcab');
    }
    const gotoplace =()=>{
        navigate('/Kplaces');
    }
    return(
       <div className="Kolkatabg">
        <CardMedia component="img" image={kolkata} id='nas' className="Kolkatabg"></CardMedia>
        <Link to="/Vikie" id='kr' ><ArrowBackIcon/></Link>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotocab} id='btn17'>Cab</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotofood} id='btn18'>Food</button></Box>
            </Stack>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotohotel} id='btn19'>hotel</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotoplace} id='btn20'>Places</button></Box>
            </Stack>
       </div>
    )
}
export default Kolkata;