import React, { Component } from 'react'
import { Col, Container, Form, Label, Row } from 'reactstrap'
import Sidebar from './Sidebar'

export default class Editpartner extends Component {
    render() {
        return (
            <div>

                <Sidebar />


                <div className='container'>
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <h2>
                            Edit Partners
                        </h2>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/"><i class="zmdi zmdi-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                                Edit Partners
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='body '>
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <div className='card text-center p-3'>
                                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='rounded-circle shadow center-block' alt="profile-image" height="100" width="100" />
                                    <h4 className=' mt-4'>
                                        Minnie Nevels
                                    </h4>
                                    <div className='row'>
                                        <div className="col-12">

                                            <h2 className='text-primary'>Individual</h2>

                                            <p className='text-muted'>
                                                2231 Grant View Drive,
                                                New Berlin,
                                                West Virginia,
                                                United States
                                                26385
                                            </p>
                                        </div>
                                        <div className='col-12'>
                                            <small>Rating</small>
                                            <h5>
                                                0
                                            </h5>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={8}>
                                <div className='card p-3  '>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <label>Partner type :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                            <Col>
                                                <label>Legel Name :</label><br />
                                                <input type="text" className='my-2 input_type'  size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>Address:</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                            <Col>
                                                <label>Email :</label><br />
                                                <input type="text" className='my-2 input_type' size='30'/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>Phone:</label><br />
                                                <input type="text" className='my-2 input_type' size='30'/>
                                            </Col>
                                            <Col>
                                                <label>Country :</label><br />
                                                <input type="text" className='my-2 input_type'size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>State :</label><br />
                                                <input type="text" className='my-2 input_type' size='30'/>
                                            </Col>
                                            <Col>
                                                <label>Zip Code :</label><br />
                                                <input type="text" className='my-2 input_type'size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>Birth Date :</label><br />
                                                <input type="date" className='my-2 input_type'size='30' />
                                            </Col>
                                            <Col>
                                                <label>Busissnes type :</label><br />
                                                <input type="text" className='my-2 input_type'  size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>SSN :</label><br />
                                                <input type="text" className='my-2 input_type' size='30'/>
                                            </Col>
                                            <Col>
                                                <label>Industry :</label><br />
                                                <input type="text" className='my-2 input_type'size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                               <label className='p-2'>Verified Document :</label><br />
                                                <input type="radio"  className='radio' />
                                                <label className='radio'>Yes </label>
                                                <input type="radio" className='radio' />
                                                <label > No</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                               <Label className='text-danger'>This partner has not upload the menu Yet !</Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                               <label className='p-2' font-size='50px'>Address Editated :</label><br />
                                                <input type="radio" className='radio' value="Bike" />
                                                <label className='radio'>Yes </label>
                                                <input type="radio"  className='radio' value="Car" />
                                                <label > No</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                               <label className='p-2'>Tax On item :</label><br />
                                                <input type="radio"  className='radio' />
                                                <label className='radio'>Yes </label>
                                                <input type="radio" className='radio' />
                                                <label > No</label>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                            <button type="button" className='btn btn-info bg-primary  update' >Update</button> <button type="button" className='btn btn-info bg-danger update'>Cancel</button>
                                            </Col>
                                            
                                        </Row>
                                    </Form>

                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>
            </div>
        )
    }
}
