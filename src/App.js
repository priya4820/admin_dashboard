import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import Webpage2 from './layout/Webpage2';
import Login from './layout/Login';
import Condition from './layout/Condition';
import { Routes, Route, HashRouter } from "react-router-dom";
import Count from './layout/Count';
import Math from './layout/Math';
import Webpage3 from './layout/Webpage3';
import Webpage from './layout/Webpage';
import Velidation from './layout/Velidation';
import Validator from './layout/Validator';

import Getdata from './layout/Getdata';
import Data from './layout/Data';
import Component1 from './layout/Context';
import User from './layout/User';
import Header1 from './component/Header1';
import Header from './component/Header';
import Table from './component/Table';

 import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Sidebar from './layout/Sidebar';
import Dashboard from './layout/Dashboard';
import Editpartner from './layout/Editpartner';
import PartnerEmployee from './layout/PartnerEmployee';
import EditEmployee from './layout/EditEmployee';
import Partnercoverphoto from './layout/Partnercoverphoto';

export default class App extends Component {
   render() {
      return (


         // <div>
         //     <Count /> 
         //  <Math /> 
         // <div>
         //    <Condition />
          
         // </div>

        


      //    <div>
      //   <Parent />
      //    </div>
         
         // <div>
         //     <User />
         // </div>
      
         // <div>
         //    <Velidation />
         // </div>

         // <div>
         //    <Validator />
         // </div>
         // <div>
         //    <Webpage3 />
         // </div>
         //    <div>
         //    <Webpage />
         // </div>
         
         // <div>
         //   <Condition />
         // </div>
   
         //      <HashRouter>
         //    <Routes>
         //    <Route index element={<Dashboard />} />
         //     <Route path="login" element={<Table />}/>


         //    </Routes>
         // </HashRouter>
      // <div>
      //    <Getdata />
      // </div>

      
     <div>

        {/* <Partnercoverphoto /> */}
       {/* <Editpartner /> 
          <PartnerEmployee /> */} 
           {/* <EditEmployee/>  */}
        <Table />
          {/* <Dashboard/>     */}
     </div>

      // <div>
      //    <Data />
      // </div>
      // <div>
      //  <Component1/>
      // </div>

     
      );
   }
}
//git remote add origin https://github.com/bhoomi0809/admin_dashboard.git



