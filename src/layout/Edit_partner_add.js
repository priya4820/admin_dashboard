import React, { Component } from "react";
import { Col, Container, Form, Row } from "reactstrap";
import Sidebar from "./Sidebar";

export default class EditEmployee extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="container">
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>Edit Employee_address</h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">
                  <i class="zmdi zmdi-home"></i> Home
                </a>
              </li>
              <li class="breadcrumb-item active">Edit Employee_address</li>
            </ul>
          </div>
        </div>

        <div className="body">
          <Container>
            <Row>
              <Col>
                <div className="card p-5  ">
                  <h3>Edit From</h3>
                  <Form>
                    <Row>
                      <label>Name * </label>
                      <br />
                      <input
                        type="text"
                        className="my-2 input_type"
                        placeholder="Admin User"
                        size="25"
                      />
                    </Row>
                    <Row>
                      <Col>
                        <label>country*</label>
                        <select
                          name="select parent module"
                          id="select parent module"
                          className="select_option"
                        >
                          <option value="Admin user">Kadi</option>
                          <option value="Advirtisment">Dharampur</option>
                          <option value="Customers">Ahmedabad</option>
                          <option value="Admin user">Palanpur</option>
                          <option value="Advirtisment">Surat</option>
                          <option value="Advirtisment">Patan</option>
                        </select>
                      </Col>
                    </Row>

                    <Row>
                      <label>state*</label>
                      <br />
                      <input
                        type="text"
                        className="my-2 input_type"
                        placeholder="Gujrat"
                      />
                    </Row>
                    <Row>
                      <Col>
                        <label>city*</label>
                        <select
                          name="select parent module"
                          id="select parent module"
                          className="select_option "
                        >
                          <option value="Admin user">Kadi</option>
                          <option value="Advirtisment">Viramgam</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <label>email*</label>
                      <br />
                      <input
                        type="text"
                        className="my-2 input_type"
                        placeholder="@gmail.com"
                      />
                    </Row>
                    <Row>
                      <label>phone*</label>
                      <br />
                      <input
                        type="text"
                        className="my-2 input_type"
                        placeholder="Number"
                      />
                    </Row>

                    <Row>
                      <label>Zip code*</label>
                      <br />
                      <input
                        type="text"
                        className="my-2 input_type"
                        placeholder="Number"
                      />
                    </Row>
                    <Row>
                      <Col>
                        <p align="center" className="mt-4">
                          <button
                            type="button"
                            className="btn btn-info bg-primary  update"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-info bg-danger update"
                          >
                            Cancel
                          </button>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
