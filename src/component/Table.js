import React, { Component } from 'react'
import { Form, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap'
import Sidebar from '../layout/Sidebar'

export default class table extends Component {
  render() {
    return (
      <div>
        
       <Sidebar/>

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
                <th>Image</th>
                <th>Name</th>
                <th>Partnertype</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th >Application Status</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>bhoomi</td>
                <td>individual</td>
                <td>virmgam</td>
                <td>bhoomi@gmail.com</td>
                <td>
                  4567584567
                </td>
                <td className=' text-success '>
                 Activeted
                </td>
                <td><span className='badge bg-success'>Active</span></td>
                <td><button type="button" className='btn btn-info bg-primary edit_btn mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>priya</td>
                <td>Busissnes</td>
                <td>kadi</td>
                <td>priya@gmail.com</td>
                <td>
                  8765676545
                </td>
                <td className='text-success'>Activeted</td>
                <td><span className='badge bg-success'>Active</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1'  >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>dhara</td>
                <td>Busissnes</td>
                <td>ahmedabad</td>
                <td>dhara@gmail.com</td>
                <td>
                  9876567876
                </td>
                <td className='text-danger'>Documents Rejected</td>
                <td><span className='badge bg-success'>Active</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>siddhi</td>
                <td>Busissnes</td>
                <td>ahmedabad</td>
                <td>siddhi@gmail.com</td>
                <td>
                  7865645676
                </td>
                <td className='text-warning'>In Progress Background Check</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Rima</td>
                <td>individual</td>
                <td>Patan</td>
                <td>Rima@gmail.com</td>
                <td>
                  7865463456
                </td>
                <td className='text-danger'>Documents Rejected</td>
                <td><span className='badge bg-success'>Active</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Dhyani</td>
                <td>individual</td>
                <td>Ahmedabad</td>
                <td>Dhyani@gmail.com</td>
                <td>
                  7865463456
                </td>
                <td className='text-warning'>In Progress Background Check</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Janvi</td>
                <td>Individual</td>
                <td>ahmedabad</td>
                <td>Janvi@gmail.com</td>
                <td>
                  9876567876
                </td>
                <td className='text-success'>Activated</td>
                <td><span className='badge bg-success'>Active</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Janki</td>
                <td>Busissnes</td>
                <td>ahmedabad</td>
                <td>janki@gmail.com</td>
                <td>
                  9876567876
                </td>
                <td className='text-warning'>In Progress Background Check</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Kajal</td>
                <td>Busissnes</td>
                <td>ahmedabad</td>
                <td>Kajal@gmail.com</td>
                <td>
                  9876567876
                </td>
                <td className='text-success'>Activated</td>
                <td><span className='badge bg-success'>Active</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Kinjal</td>
                <td>Busissnes</td>
                <td>ahmedabad</td>
                <td>kinjal@gmail.com</td>
                <td>
                  9876567876
                </td>
                <td className='text-warning'>In Progress Background Check</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1' >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
              <tr>
                <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                <td>Ritu</td>
                <td>Busissnes</td>
                <td>ahmedabad</td>
                <td>ritu@gmail.com</td>
                <td>
                  9876567876
                </td>
                <td className='text-warning'>In Progress Background Check</td>
                <td><span className='badge badge-warning'>Inactive</span></td>
                <td><button type="button" className='btn btn-info bg-primary  mb-1'  >Edit</button><br /><button type="button" className='btn btn-info bg-danger'>Delete</button></td>
              </tr>
            </Table>
          </Form>

        </div>

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
    )
  }
}
