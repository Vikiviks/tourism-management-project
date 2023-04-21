import React from 'react'
import Vikie from './components/Vikie';
import Login from './components/login';
import Signup from './components/Signup';
import Chennai from './components/Chennai';
import Allahabad from './components/Allahabad';
import Darjeeling from './components/Darjeeling';
import Bengaluru from './components/Bengaluru';
import Delhi from './components/Delhi';
import Kolkata from './components/Kolkata';
import Cfood from './components/Cfood';
import Afood from './components/Afood';
import Bfood from './components/Bfood';
import Dfood from './components/Dfood';
import DJfood from './components/DJfood';
import Kfood from './components/Kfood';
import Chotel from './components/Chotel';
import Ahotel from './components/Ahotel';
import Bhotel from './components/Bhotel';
import Dhotel from './components/Dhotel';
import DJhotel from './components/DJhotel';
import Khotel from './components/Khotel';
import Ctq from './components/Ctq';
import Atq from './components/Atq';
import Btq from './components/Btq';
import Dtq from './components/Dtq';
import Ktq from './components/Ktq';
import DJtq from './components/DJtq';
import Ccab from './components/Ccab';
import Acab from './components/Acab';
import Bcab from './components/Bcab';
import Dcab from './components/Dcab';
import DJcab from './components/DJcab';
import Kcab from './components/Kcab';
import Cplaces from './components/Cplaces';
import Aplaces from './components/Aplaces';
import Bplaces from './components/Bplaces';
import Dplaces from './components/Dplaces';
import DJplaces from './components/DJplaces';
import Kplaces from './components/Kplaces';
import DPrehotel from './components/DPrehotel';
import APrehotel from './components/APrehotel';
import BPrehotel from './components/BPrehotel';
import CPrehotel from './components/CPrehotel';
import DJPrehotel from './components/DJPrehotel';
import KPrehotel from './components/KPrehotel';
import DPreplace from './components/DPreplace';
import CPreplace from './components/CPreplace';
import CPrefood from './components/CPrefood';
import DPrefood from './components/CPrefood';
import APrefood from './components/CPrefood';
import BPrefood from './components/CPrefood';
import DJPrefood from './components/CPrefood';
import KPrefood from './components/CPrefood';
import BPreplace from './components/BPreplace';



import { Routes, Route } from 'react-router-dom';
function App() {	
					
		return (
			<div>
				<Routes>
					<Route path="/vikie" element={<Vikie/>}></Route> 
					<Route path="/" element={<Login/>}></Route>
					<Route path="/signup" element={<Signup/>}></Route>
					<Route path="/Chennai" element={<Chennai/>}></Route>
					<Route path="/Allahabad" element={<Allahabad/>}></Route>
					<Route path="/Darjeeling" element={<Darjeeling/>}></Route>
					<Route path="/Bengaluru" element={<Bengaluru/>}></Route>
					<Route path="/Delhi" element={<Delhi/>}></Route>
					<Route path="/Kolkata" element={<Kolkata/>}></Route>
					<Route path="/Cfood" element={<Cfood/>}></Route>
					<Route path="/Afood" element={<Afood/>}></Route>
					<Route path="/Bfood" element={<Bfood/>}></Route>
					<Route path="/Dfood" element={<Dfood/>}></Route>
					<Route path="/DJfood" element={<DJfood/>}></Route>
					<Route path="/Kfood" element={<Kfood/>}></Route>
					<Route path="/Chotel" element={<Chotel/>}></Route>
					<Route path="/Ahotel" element={<Ahotel/>}></Route>
					<Route path="/Bhotel" element={<Bhotel/>}></Route>
					<Route path="/Dhotel" element={<Dhotel/>}></Route>
					<Route path="/DJhotel" element={<DJhotel/>}></Route>
					<Route path="/Khotel" element={<Khotel/>}></Route>
					<Route path="/Ctq" element={<Ctq/>}></Route>
					<Route path="/Atq" element={<Atq/>}></Route>
					<Route path="/Btq" element={<Btq/>}></Route>
					<Route path="/Dtq" element={<Dtq/>}></Route>
					<Route path="/DJtq" element={<DJtq/>}></Route>
					<Route path="/Ktq" element={<Ktq/>}></Route>
					<Route path="/Ccab" element={<Ccab/>}></Route>
					<Route path="/Acab" element={<Acab/>}></Route>
					<Route path="/Bcab" element={<Bcab/>}></Route>
					<Route path="/Dcab" element={<Dcab/>}></Route>
					<Route path="/DJcab" element={<DJcab/>}></Route>
					<Route path="/Kcab" element={<Kcab/>}></Route>
					<Route path="/Cplaces" element={<Cplaces/>}></Route>
					<Route path="/Aplaces" element={<Aplaces/>}></Route>
					<Route path="/Bplaces" element={<Bplaces/>}></Route>
					<Route path="/Dplaces" element={<Dplaces/>}></Route>
					<Route path="/DJplaces" element={<DJplaces/>}></Route>
					<Route path="/Kplaces" element={<Kplaces/>}></Route>
					<Route path="/DPrehotel" element={<DPrehotel/>}></Route>
					<Route path="/APrehotel" element={<APrehotel/>}></Route>
					<Route path="/BPrehotel" element={<BPrehotel/>}></Route>
					<Route path="/CPrehotel" element={<CPrehotel/>}></Route>
					<Route path="/DJPrehotel" element={<DJPrehotel/>}></Route>
					<Route path="/KPrehotel" element={<KPrehotel/>}></Route>
					<Route path="/DPreplace" element={<DPreplace/>}></Route>
					<Route path="/CPreplace" element={<CPreplace/>}></Route>
					<Route path="/CPrefood" element={<CPrefood/>}></Route>
					<Route path="/APrefood" element={<APrefood/>}></Route>
					<Route path="/BPrefood" element={<BPrefood/>}></Route>
					<Route path="/DPrefood" element={<DPrefood/>}></Route>
					<Route path="/DJPrefood" element={<DJPrefood/>}></Route>
					<Route path="/KPrefood" element={<KPrefood/>}></Route>
					<Route path="/BPreplace" element={<BPreplace/>}></Route>
					
				</Routes>
				 
			</div>
		);
	}

export default App;