import React, { Component } from 'react'
import { Form, Table } from 'reactstrap'
import Sidebar from './Sidebar'

export default class Partnercoverphoto extends Component {
    render() {
        return (
            <div>

                <Sidebar />
                <div className='container'>
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <h2>
                            Partners CoverPhoto
                        </h2>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/"><i class="zmdi zmdi-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                                Partners CoverPhoto
                            </li>
                        </ul>
                    </div>

                    <div>

                        <Form>
                            <Table className='table'>

                                <tr>
                                    <th>Image</th>
                                    <th>Partner Name</th>
                                    <th>Title</th>
                                    <th>Discription</th>
                                    <th>Updated At</th>
                                    <th >Created At</th>
                                    <th>Upload Status</th>
                                    <th>Status</th>
                                    <th>Verify Document</th>
                                </tr>
                                
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Bhoomi</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > March 16, 2022 5:56 AM</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Priya</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Dhara</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Siddhi</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Rima</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Dhyani</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Janvi</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src='https://iconarchive.com/download/i106731/praveen/minimal-outline/gallery.ico'></img></td>
                                    <td>Janki</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td > </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </Table>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

