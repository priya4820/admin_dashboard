import React, { Component } from "react";
import { Container, Form } from "reactstrap";

export default class Partner_add extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2> Employee_Address</h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">
                  <i class="zmdi zmdi-home"></i> Home
                </a>
              </li>
              <li class="breadcrumb-item active"> Employee_Address</li>
            </ul>
          </div>
        </div>
        <Form className="justify-content-center form">
          <Container>
            <table className="table">
              <tr>
                <th>Partner_Name</th>
                <th>country</th>
                <th>state</th>
                <th>city</th>
                <th>zipcoded</th>
                <th>email</th>
                <th>phone</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>Priya</td>
                <td>Dharampur</td>
                <td>Gujrat</td>
                <td>Kadi</td>
                <td>12345</td>
                <td>priyapatelitservices@gmail.com</td>
                <td>9979517675</td>

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
                <td>Bhoomika</td>
                <td>Jadavpura</td>
                <td>Gujrat</td>
                <td>Viramgam</td>
                <td>145678</td>
                <td>bhumipatelitservices@gmail.com</td>
                <td>9945879555</td>

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
                <td>Ahemedabad</td>
                <td>Gujrat</td>
                <td>Kadi</td>
                <td>458795</td>
                <td>poojapatel@gmail.com</td>
                <td>1258745698</td>

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
                <td>Palanpur</td>
                <td>Gujrat</td>
                <td>Kadi</td>
                <td>458795</td>
                <td>rimakhatri@gmail.com</td>
                <td>4587952369</td>

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
                <td>Suhani</td>
                <td>Surat</td>
                <td>Gujrat</td>
                <td>Viramgam</td>
                <td>454587</td>
                <td>suhanipatel@gmail.com</td>
                <td>4587952314</td>

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
                <td>Hardik</td>
                <td>Patan</td>
                <td>Gujrat</td>
                <td>Kadi</td>
                <td>458745</td>
                <td>hardik@gmail.com</td>
                <td>4587952145</td>

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
                <td>Vijay</td>
                <td>Patan</td>
                <td>Gujrat</td>
                <td>Kadi</td>
                <td>458458</td>
                <td>vijayprajapati@gmail.com</td>
                <td>4582145879</td>

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
                <td>kaushik</td>
                <td>Ahemedabad</td>
                <td>Gujrat</td>
                <td>Kadi</td>
                <td>458154</td>
                <td>kaushik@gmail.com</td>
                <td>4587952369</td>

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
            </table>
          </Container>
        </Form>
      </div>
    );
  }
}
