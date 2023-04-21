import React, { Component } from 'react';
import './Cplaces.css';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
class Place extends Component {
  render() { 
    return (

      <div>
        
        <Link to="/Chennai" id='kr'><ArrowBackIcon/></Link>
        <h1 id='int7'>Chennai</h1>
        <form id='x2'>
          <table id="gfg">
            <tr>
            <th id='x1'></th>
              <th id='x1'>Time Slot</th>
              <th id='x1'>Things to do</th>
           
            </tr>
            <tr>
            <td rowspan="4" id='x1'><b>DAY 1</b></td>
              <td id="x1">6.00 am – 8.15 am</td>
              <td id="x1">Watch the sunrise at Marina Beach followed by a quintessential South Indian breakfast at Triplicane</td>
            </tr>
          <tr>
          <td id="x1">8.30 am – 11.30 am</td>
          < td id='x1'>Visit Sri Parthasarathy and other iconic religious attractions</td>
          </tr>
          <tr>
          <td id="x1">12.00 pm – 2.00 pm</td>
          < td id='x1'>Take a tour of the Government Museum followed by lunch</td>
          </tr>
          <tr>
          <td id="x1">4.15 pm onwards</td>
          < td id='x1'>Head to Burma Bazaar for some budget shopping followed by an early dinner</td>
          </tr>
          <tr>
          <td rowspan="4" id="x1"><b>DAY 2</b></td>
           <td id='x1'>10.00 am – 3.30 pm</td>
           <td id='x1'>Explore the cultural and culinary delights of Mylapore</td>


         </tr>
         <tr>
         <td id='x1'>4.00 pm – 5.00 pm</td>
         <td id='x1'>Witness the architectural beauty of Marundeeswarar Temple</td>
          
         
          </tr>
          <tr>
          <td id='x1'>5.15 pm – 6.30 pm</td>
          <td id='x1'>Watch the sunset at Elliot Beach</td>
          </tr>
          <tr>
          <td id='x1'>7.00 pm onwards</td>
          <td id='x1'>Shop till you drop at T. Nagar followed by dinner</td>
          </tr>
          
            
          </table>
        </form>
      </div>
    );
  }
}
 
export default Place;