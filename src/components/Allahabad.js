import './Allahabad.css';
import {Link,useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Stack,Box} from '@mui/material';
import allahabad from './images/allahabad.jpg';
import { CardMedia } from "@mui/material";


const Allahabad=()=>{
    const navigate=useNavigate();

   
    const gotofood =()=>{
        navigate('/Afood');
    }
    const gotohotel =()=>{
        navigate('/APrehotel');
    }
    const gotocab =()=>{
        navigate('/Acab');
    }
    const gotoplace =()=>{
        navigate('/Aplaces');
    }
    return(
       <div className="Allahabadbg">
         <CardMedia component="img" image={allahabad} id='nas' className="Allahabadbg"></CardMedia>
        <Link to="/Vikie" id='krs'><ArrowBackIcon/></Link>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotocab} id='btn5'>Cab</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotofood}id='btn6'>Food</button></Box>
            </Stack>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotohotel} id='btn7'>Hotel</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotoplace} id='btn8'>Places</button></Box>
            </Stack>
       </div>
    )
}
export default Allahabad;