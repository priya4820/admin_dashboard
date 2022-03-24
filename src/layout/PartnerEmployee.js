import React, { Component } from 'react'
import { Form, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap'
import Sidebar from './Sidebar'

export default class PartnerEmployee extends Component {
  render() {
    return (
      <div>


        <Sidebar />

        <div className='container'>
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>
              Partners Employee
            </h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/"><i class="zmdi zmdi-home"></i> Home</a>
              </li>
              <li class="breadcrumb-item active">
                Partners Employee
              </li>
            </ul>

          </div>


          <Form>
            <Table className='table'>

              <tr>
              <th>Image</th>
                <th>Partner Name</th>
                <th>Employee Name</th>
                <th>Address</th>
                <th>Partner Payment Status</th>
                <th >Application Status</th>
                <th>Commision Percentage</th>
                <th>Employee Skills</th>
                <th>Action</th>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Dhaval</td>
                <td>Dhaval</td>
                <td>303,akshar socity,gota,ahmedabad</td>
                <td><span className='badge bg-success'>Active</span></td>
                <td className=' text-success '> Activeted</td>
                <td>10%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Dhara</td>
                <td>Hardi</td>
               
                <td>501,sanskar socity,vastral,Ahmedabad</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
               
                <td className=' text-success '> Activeted</td>
                <td>20%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Siddhi</td>
                <td>Shital</td>
                
                <td>201,star socity,Nikol,Ahmedabad</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
               
                <td className=' text-danger '> Inactive</td>
                <td>15%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Hardik</td>
                <td>Maya</td>
              
                <td>201,Bagodara, sanad</td>
                <td><span className='badge bg-success'>Active</span></td>
               
                <td className=' text-success '> Activeted</td>
                <td>20%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Nehal</td>
                <td>Kashis</td>
               
                <td>302,Raghvendra apartment,ahmedabad</td>
                <td><span className='badge bg-success'>Active</span></td>
               
                <td className=' text-success '> Activeted</td>
                <td>20%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Meet</td>
                <td>Payal</td>
                
                <td>502,Triveni socity,kadi</td>
                <td><span className='badge bg-success'>Active</span></td>
               
                <td className=' text-success '> Activeted</td>
                <td>20%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Prince</td>
                <td>Dharti</td>
               
                <td>204,Mahajan apartment,surat </td>
                <td><span className='badge badge-warning'>Inactive</span></td>
               
                <td className=' text-warning '> Inactive</td>
                <td>20%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Payal</td>
                <td>Hiral</td>
               
                <td>401,saaga residancy,goa</td>
                <td><span className='badge bg-success'>Active</span></td>
                
                <td className=' text-success '> Activeted</td>
                <td>20%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>

              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Jay</td>
                <td>Riddhi</td>
              
                <td>301,tapovan socity,surat</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
               
                <td className=' text-warning '> Inactive</td>
                <td>21%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Priya</td>
                <td>Janak</td>
                
                <td>401,shyam socity,Kadi</td>
                <td><span className='badge bg-success'>Active</span></td>
              
                <td className=' text-success '> Activeted</td>
                <td>3%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
              <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
              <td>Bhoomi</td>
                <td>Nita</td>
               
                <td>201,Bagodara, sanad</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
             
                <td className=' text-warning '> Inactive</td>
                <td>10%</td>
                <td></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
            </Table>
          </Form>



          <Pagination className='float-end'>
  <PaginationItem>
    <PaginationLink
      first
      href="#"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    />
  </PaginationItem>
</Pagination>


        </div>
      </div>
    )
  }
}
