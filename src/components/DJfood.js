import React, { useState } from "react";
import {Stack,Box} from '@mui/material';
import './cfood.css';
import './afood.css';
import { Link, useNavigate } from "react-router-dom";
function Food (){
    const navigate=useNavigate();
    function checkdata(){
    let vegnonveg=document.getElementById("vnk").value ;
    let vegmenu=document.getElementById("vma").value ;
    let nonvegmenu=document.getElementById("vm1").value ;
    let vegrestaurent=document.getElementById("vr").value ;
    let nonvegrestaurent=document.getElementById("vra1").value ;
    let noitem=document.getElementById("jer").value ;
    let noofitem=document.getElementById("jera1").value ;
    if(vegnonveg==="Select")
    {
      alert("Please fill Veg or Non-veg");
    }
    else if(vegmenu==="Select" && nonvegmenu==="Select")
    {
      alert("Please fill Veg Menu");
    }
  
    else if(vegrestaurent==="Select" && nonvegrestaurent==="Select")
    {
      alert("Please select your Restaurent");
    }
   
    else if(noitem==="" && noofitem==="")
    {
      alert("Please select the number of items");
    }
   
    else{
      alert("order confirm");
      navigate("/Darjeeling");
      
    }
  }
 
   
    return (
      <div className="foodbg">
      <Stack direction="row">
        <Box  >
        <div>
        <h1 id='internal'>FoodHub</h1>
        <form id='dha'>
          <div>
            <table>
         
            </table>
          </div>
        </form>
  
        <form id="leftcon" >
          <table>
          <tr>
               <td><b>Veg or Non-veg</b></td>
               <td><select id='vnk'>
              <option type="">Select</option>
              <option type="">Veg</option>
              <option type="">Non-veg</option>
              <option type="">Both</option>
             </select ></td>
           
            </tr>
            <tr>
            
            <td><b>Veg Menu</b></td>
          <p> <td><select id='vma'>
              <option type="">Select</option>
              <option type="">Chapathi</option>
              <option type="">Chole poori</option>
              <option type="">Dal Makhani</option>
              <option type="">Matar Panner</option>
              <option type="">Rajma</option>
             </select ></td></p>
         
          </tr>
          
          <tr>
          <td><b>Popular restaurents for veg</b></td>
           <p> <td><select id='vr'>
              <option type="">Select</option>
              <option type="">Hotel Ganesh Bhavan,Darjeeling</option>
              <option type="">Hotel Sri Vaishnavi devi,Darjeeling</option>
              <option type="">Annalakshmi Restaurent,Darjeeling</option>
              <option type="">Royal Vega,Darjeeling</option>
             </select ></td></p>
            
         </tr>
      
          <tr>
          <td><b>Number of Items</b></td>
              <td><input type="number" placeholder='Enter the Quantity' id='jer' /></td>
        
         
          </tr><br></br>
            
          </table>
          <button onClick={checkdata} id='sum'>Order</button>
        </form>
      </div>
        </Box>
        <Box  >
        <div>
        <form id="rightcon">
          <table>
   
            <tr>
            
            <td><b>Non-veg Menu</b></td>
           <p> <td><select id='vm1'>
              <option type="">Select</option>
              <option type="">Chicken Briyani</option>
              <option type="">Mutton Briyani</option>
              <option type="">Butter Chicken</option>
              <option type="">Tandoori</option>
              <option type="">Mutton Dabba wala</option>
             </select ></td></p>
         
          </tr>
          
          <tr>
          <td><b>Top restaurents for Non-veg</b></td>
           <p><td><select id='vra1'>
              <option type="">Select</option>
              <option type="">Almaza Restaurent,Darjeeling</option>
              <option type="">Hotel Varshini,Darjeeling</option>
              <option type="">Pind bulluchi restaurent,Darjeeling</option>
              <option type="">Dhaba Estd,Darjeeling</option>
             </select ></td></p>
            
         </tr>
      
          <tr>
          <td><b>Number of Items</b></td>
              <td><input type="number" placeholder='Enter the Quantity' id='jera1'/></td>
        
         
          </tr><br></br>
            
          </table>
        </form>
      </div>
        </Box>
      </Stack>
      </div>
      
    );
  
}
 
export default Food;