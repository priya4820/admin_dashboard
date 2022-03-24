import React, { Component } from 'react'
import { Form, Table } from 'reactstrap'
import Sidebar from './Sidebar'

export default class PartnerEmployee extends Component {
  render() {
    return (
      <div>


        <Sidebar />

        <div className='container'>
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>
              Partners
            </h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/"><i class="zmdi zmdi-home"></i> Home</a>
              </li>
              <li class="breadcrumb-item active">
                Partners
              </li>
            </ul>

          </div>


          <Form>
            <Table className='table'>

              <tr>

                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Partner Payment Status</th>
                <th>Job Potation</th>
                <th >Application Status</th>
                <th>Commision Percentage</th>
                <th>Employee Skills</th>
              </tr>
              <tr>
                <td>Dhaval</td>
                <td>Patel</td>
                <td>303,akshar socity,gota,ahmedabad</td>
                <td><span className='badge bg-success'>Active</span></td>
                <td></td>
                <td className=' text-success '> Activeted</td>
                <td>10%</td>
                <td></td>
              </tr>
              <tr>
                <td>Hardi</td>
                <td>Soni</td>
                <td>501,sanskar socity,vastral,Ahmedabad</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
                <td></td>
                <td className=' text-success '> Activeted</td>
                <td>20%</td>
                <td></td>
              </tr>
              <tr>
                <td>Shital</td>
                <td>Sharma</td>
                <td>201,star,Nikol,Ahmedabad</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
                <td></td>
                <td className=' text-success '> Activeted</td>
                <td>15%</td>
                <td></td>
              </tr>
            </Table>
          </Form>
        </div>
      </div>
    )
  }
}
