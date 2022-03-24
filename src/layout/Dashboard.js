import React, { Component } from 'react'
import Sidebar from './Sidebar'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
           <Sidebar/>

<div className='container'>
  <div class="col-lg-7 col-md-6 col-sm-12">
    <h2>
      Dashboard
    </h2>
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/"><i class="zmdi zmdi-home"></i> Home</a>
      </li>
      
    </ul>
  
  </div>

 
      </div>
      </div>
    )
  }
}
