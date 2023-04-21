import './Darjeeling.css';
import {Link,useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Stack,Box} from '@mui/material';


const Darjeeling=()=>{
    const navigate=useNavigate();

    
    const gotofood =()=>{
        navigate('/DJfood');
    }
    const gotohotel =()=>{
        navigate('/DJPrehotel');
    }
    const gotocab =()=>{
        navigate('/DJcab');
    }
    const gotoplace =()=>{
        navigate('/DJplaces');
    }
    return(
       <div className="Darjeelingbg" >
        <Link to="/Vikie" id='krf' ><ArrowBackIcon/></Link>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotocab} id='btn9'>Cab</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotofood} id='btn10'>Food</button></Box>
            </Stack>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotohotel} id='btn11'>Hotel</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button onClick={gotoplace} id='btn12'>Places</button></Box>
            </Stack>
       </div>
    )
}
export default Darjeeling;