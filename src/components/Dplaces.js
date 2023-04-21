import React, { Component } from 'react';
import './Cplaces.css';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
class Place extends Component {
  render() { 
    return (

      <div>
        
        <Link to="/Delhi" id='kr'><ArrowBackIcon/></Link>
        <h1 id='int7'>Delhi</h1>
        <form id='x2'>
          <table id="gfg">
            <tr>
            <th id='x1'></th>
              <th id='x1'>Time Slot</th>
              <th id='x1'>Things to do</th>
           
            </tr>
            <tr>
            <td rowspan="5" id='x1'><b>DAY 1</b></td>
              <td id="x1">7.00 am – 8.00 am</td>
              <td id="x1">Capture the most iconic attractions on the Rajpath</td>
            </tr>
          <tr>
          <td id="x1">8.30 am – 1.00 pm</td>
          < td id='x1'>Indulge in gastronomic & cultural delights of Old Delhi</td>
          </tr>
          <tr>
          <td id="x1">1.00 pm – 4.00 pm</td>
          < td id='x1'>Delve into the Mughal magnificence at Red Fort</td>
          </tr>
          <tr>
          <td id="x1">4.30 pm – 7.30 pm</td>
          < td id='x1'>Enjoy a shopping spree at Connaught Place</td>
          </tr>
          <tr>
          <td id="x1">7.30 pm onward</td>
          < td id='x1'>Relish scrumptious food, party or attend a live gig</td>
          </tr>
          <tr>
          <td rowspan="5" id="x1"><b>DAY 2</b></td>
           <td id='x1'>10.00 am – 11.30 am</td>
           <td id='x1'>Visit the centuries-old Qutub Minar Complex</td>
         </tr>
         <tr>
         <td id='x1'>11.45 am – 2.00 pm</td>
         <td id='x1'>Explore the mystical ruins and quirky cafes of Hauz Khas</td>
          </tr>
          <tr>
          <td id='x1'>2.00 pm – 3.00 pm</td>
          <td id='x1'>Admire the architectural beauty of Lotus Temple</td>
          </tr>
          <tr>
          <td id='x1'>3.30 pm – 4.30 pm</td>
          <td id='x1'>Capture the grand setting of Humayun’s Tomb</td>
          </tr>
          <tr>
          <td id='x1'>4.45 pm – 5.30 pm</td>
          <td id='x1'>Take a stroll around the historical Lodhi Garden</td>
          </tr>
          
            
          </table>
        </form>
      </div>
    );
  }
}
 
export default Place;