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
            <h2>Edit Employee</h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">
                  <i class="zmdi zmdi-home"></i> Home
                </a>
              </li>
              <li class="breadcrumb-item active">Edit Employee</li>
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

                      <label>icon tag *</label>
                      <br />
                      <input
                        type="text"
                        className="my-2 input_type"
                        placeholder="<i class=zmdi zmdi-accounts-alt></i>"
                        size="25"
                      />
                    </Row>

                    <Row>
                      <label>Url *</label>
                      <br />
                      <input
                        type="text"
                        className="my-2 input_type"
                        placeholder="/admin_user"
                      />
                    </Row>
                    <Row>
                      <Col>
                        <label>Status *</label>
                        <select
                          name="select parent module"
                          id="select parent module"
                          className="select_option "
                        >
                          <option value="Admin user">Active</option>
                          <option value="Advirtisment">Inactive</option>
                          <option value="Customers">Delete</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Parent Module *</label>
                        <select
                          name="select parent module"
                          id="select parent module"
                          className="select_option"
                        >
                          <option value="Admin user">Admin user</option>
                          <option value="Advirtisment">Advirtisment</option>
                          <option value="Customers">Customers</option>
                          <option value="Customers">Dashbord</option>
                          <option value="Customers">Module</option>
                          <option value="Customers">Module</option>
                          <option value="Customers">Order</option>
                          <option value="Customers">Partnerlist</option>
                          <option value="Customers">Region</option>
                          <option value="Customers">Setting</option>
                        </select>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p align="center" className="mt-5">
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
