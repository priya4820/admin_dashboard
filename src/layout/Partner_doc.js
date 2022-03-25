import React, { Component } from "react";
import {
  Form,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import Sidebar from "../layout/Sidebar";

export default class table extends Component {
  render() {
    return (
      <div>
        <Sidebar />

        <div className="container">
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>Partner</h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">
                  <i class="zmdi zmdi-home"></i> Home
                </a>
              </li>
              <li class="breadcrumb-item active">Partner</li>
            </ul>
          </div>

          <Form>
            <Table className="table">
              <tr>
                <th>Partner_Name</th>
                <th>Doc_name</th>
                <th>Description</th>
                <th>Path</th>
                <th>Upload_status</th>
                <th>Multiple_allow</th>
                <th>Verify_document</th>
                <th>Is_Verified</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Priya</td>
                <td>PROFILE PHOTO</td>
                <td>Lorem Ipsum is simply dummy text.</td>
                <td>
                  <img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Document-icon.png"></img>
                </td>
                <td className="text-warning">Panding</td>
                <td className="text-success"> Yes</td>
                <td className="text-success">Yes</td>
                <td>True</td>
                <td>
                  <span className="badge bg-warning">Inactive</span>
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Pooja</td>
                <td>IDENTITY DOCUMENT</td>
                <td>Online Grammar and Writing Checker .</td>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/128/160/160469.png" />
                </td>
                <td className="text-success">Uploaded</td>
                <td className="text-danger"> No</td>
                <td className="text-success">Yes</td>
                <td>False</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Dhara</td>
                <td>DRIVERS LICENSE</td>
                <td>In publishing and graphic design.</td>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/128/160/160469.png" />
                </td>
                <td className="text-success">Uploaded</td>
                <td className="text-success">Yes</td>
                <td className="text-success">Yes</td>
                <td>True</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Siddhi</td>
                <td>PROFESSIONAL/BUSINESS LICENSE</td>
                <td>In saloon and graphic design.</td>
                <td>
                  <img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Document-icon.png"></img>
                </td>
                <td className="text-warning">Panding</td>
                <td className="text-success">Yes</td>
                <td className="text-danger">No</td>
                <td>False</td>
                <td>
                  <span className="badge bg-danger">Deleted</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Kenvi</td>
                <td>PROFILE PHOTO</td>
                <td>A handy Lorem Ipsum Generator.</td>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/128/160/160469.png" />
                </td>
                <td className="text-success">Uploaded</td>
                <td className="text-danger">No</td>
                <td className="text-success">Yes</td>
                <td>False</td>
                <td>
                  <span className="badge bg-warning">Inactive</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Rima</td>
                <td>IDENTITY DOCUMENT</td>
                <td>In identy customer .</td>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/128/160/160469.png" />
                </td>
                <td className="text-warning">Panding</td>
                <td className="text-success">Yes</td>
                <td className="text-success">Yes</td>
                <td>True</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Hetal</td>
                <td>DRIVERS LICENSE</td>
                <td>A grafic design.</td>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/128/160/160469.png" />
                </td>
                <td className="text-warning">Panding</td>
                <td className="text-danger">No</td>
                <td className="text-danger">No</td>
                <td>True</td>
                <td>
                  <span className="badge bg-warning">Inactive</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Rajvi</td>
                <td>IDENTITY DOCUMENT</td>
                <td>Lorem Ipsum is simply.</td>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/128/160/160469.png" />
                </td>
                <td className="text-success">Uploaded</td>
                <td className="text-success">Yes</td>
                <td className="text-danger">No</td>
                <td>False</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Bhavya</td>
                <td>PROFESSIONAL/BUSINESS LICENSE</td>
                <td>
                  Enter the worlds largest library of study materials, essays
                  and course works.
                </td>
                <td>
                  <img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Document-icon.png"></img>
                </td>
                <td className="text-success">Uploaded</td>
                <td className="text-danger">No</td>
                <td className="text-success">Yes</td>
                <td>True</td>
                <td>
                  <span className="badge bg-danger">Deleted</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Saxi</td>
                <td>DRIVERS LICENSE</td>
                <td>Easily Improve Any Text..</td>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/128/160/160469.png" />
                </td>
                <td className="text-warning">Panding</td>
                <td className="text-success">Yes</td>
                <td className="text-danger">No</td>
                <td>True</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Kavya</td>
                <td>IDENTITY DOCUMENT </td>
                <td>Improve Word Choice.</td>
                <td>
                  <img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Document-icon.png"></img>
                </td>
                <td className="text-success">Uploaded</td>
                <td className="text-danger">No</td>
                <td className="text-danger">No</td>
                <td>False</td>
                <td>
                  <span className="badge bg-danger">Deleted</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info bg-primary  mb-1"
                  >
                    Edit
                  </button>
                  <br />
                  <button type="button" className="btn btn-info bg-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </Table>
          </Form>
        </div>

        <Pagination className="float-end">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
