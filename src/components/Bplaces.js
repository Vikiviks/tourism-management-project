import React, { Component } from 'react';
import './Cplaces.css';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
class Place extends Component {
  render() { 
    return (

      <div>
        
        <Link to="/Kolkata" id='kr'><ArrowBackIcon/></Link>
        <h1 id='int7'>Bengaluru</h1>
        <form id='x2'>
          <table id="gfg">
            <tr>
            <th id='x1'></th>
              <th id='x1'>Time Slot</th>
              <th id='x1'>Things to do</th>
           
            </tr>
            <tr>
            <td rowspan="4" id='x1'><b>DAY 1</b></td>
              <td id="x1">8.30 am - 9.30 am </td>
              <td id="x1">Enjoy a sumptuous breakfast at the famous Flurys at park street</td>
            </tr>
          <tr>
          <td id="x1">10.00 am - 4.00 pm</td>
          < td id='x1'>Visit victoria Memorial and other attractions near Maidan</td>
          </tr>
          <tr>
          <td id="x1">4.15 pm - 6.15 pm </td>
          < td id='x1'>Capture the beauty of Prinsep ghat</td>
          </tr>
          <tr>
          <td id="x1">6.30 onwards</td>
          < td id='x1'>Head back to Park street ,do some shopping ,and enjoy the night vibes of kolkata</td>
          </tr>
          <tr>
          <td rowspan="8" id="x1"><b>DAY 2</b></td>
           <td id='x1'>7.30 am - 8.30 am</td>
           <td id='x1'>Start the day with filling breakFast at terreti Morning market</td>


         </tr>
         <tr>
         <td id='x1'>9.00 am - 10.00 am</td>
         <td id='x1'>Visit the Kalighat temple</td>
          
         
          </tr>
         <tr>
         <td id='x1'>10.30 am - 2.00 pm</td>
         <td id='x1'>Indian museum</td>
          
         
          </tr>
         <tr>
         <td id='x1'>2.15 pm - 4.00 pm</td>
         <td id='x1'>Soak in the splender of colonial-era architecture at BBD Bagh</td>
          
         
          </tr>
         <tr>
         <td id='x1'>4.15 pm - 5.15 pm</td>
         <td id='x1'>Relaxing moment at Millennium Park</td>
          
         
          </tr>
         <tr>
         <td id='x1'>5.30 pm - 6.00 pm</td>
         <td id='x1'>Visit Howrah Bridge</td>
          
         
          </tr>
         <tr>
         <td id='x1'>6.30 pm - 7.45 pm </td>
         <td id='x1'>Shopping in new market</td>
          
         
          </tr>
          <tr>
          <td id='x1'>8.00 pm</td>
          <td id='x1'>Dinner at restaurant</td>
          </tr>
          
            
          </table>
        </form>
      </div>
    );
  }
}
 
export default Place;