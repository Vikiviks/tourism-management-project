import './Delhi.css';
import {Link,useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Stack,Box} from '@mui/material';
import taj from './images/taj.jpg';
import { CardMedia } from "@mui/material";

const Delhi=()=>{
    const navigate=useNavigate();

    
    const gotofood =()=>{
        navigate('/Dfood');
    }
    const gotohotel =()=>{
        navigate('/DPrehotel');
    }
    const gotocab =()=>{
        navigate('/Dcab');
    }
    const gotoplace =()=>{
        navigate('/DPreplace');
    }
    return(
       <div className="Delhibg">
        <CardMedia component="img" image={taj} id='nas' className="Delhibg"></CardMedia>
        <Link to="/Vikie" id='kr'><ArrowBackIcon/></Link>
            <Stack direction="row">
              <h1 id="g2">viki</h1>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotocab} id='btn17'>Cab</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotofood} id='btn18'>Food</button></Box>
            </Stack>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotohotel} id='btn19'>Hotel</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotoplace} id='btn20'>Places</button></Box>
            </Stack>
       </div>
    )
}
export default Delhi;