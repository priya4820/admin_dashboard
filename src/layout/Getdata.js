

// import React from 'react';
// import { Form } from 'reactstrap';
// import  useState  from "react";
// function Getdata() {
// 	const names = ['Bruce', 'Clark', 'Diana']

//     return (
//     	<div>



//       {names.map(name => <h2>{name}</h2>)}
//       	</div>

//     );
//     }
// export default Getdata;



import React, { useState, useEffect } from "react";
import { Form } from "reactstrap";


function Getdata() {

    const [data, setData] = useState([])

    const [name, setName] = useState({
        value: '',
        show: ''
    });
    const [lname, setlName] = useState({
        value: '',
        show: ''
    });
    const [num, setNum] = useState({
        value: '',
        show: ''
    });
    const handleName = (e) => {
        if (e.target.name === 'firstName') {
            setName({ value: e.target.value })
        }
        else if (e.target.name === 'lastName') {
            setlName({ value: e.target.value })
        } else {
            setNum({ value: e.target.value })
        }

    }
    // const handlelName = (e) => {
    //     setlName({ value: e.target.value })
    // }

    // const handlenum = (e) => {
    //     setNum({ value: e.target.value })
    // }


    const submit = (e) => {

        e.preventDefault();

        if (!name.value) {
            alert('please enter name');
            document.myForm.name.focus();
            return false;

        }
        else if (!lname.value) {
            alert('please enter Lastname');
            document.myForm.lname.focus();
            return false;
        }
        else if (!num.value) {
            alert('please enter your contact num');
            return false;
        }


        else {

            const obj = {
                firstName: name.value,
                lastName: lname.value,
                No: num.value
            }
            setData([...data, obj])
            setName({ value: '', show: '' })
            setlName({ value: '', show: '' })
            setNum({ value: '', show: '' })


        }


    }



    // const validate = () => {

    //     if (!name.value) {
    //         alert('please enter name');
    //         document.myForm.name.focus();
    //         return false;

    //     }
    //     else if (!lname.value) {
    //         alert('please enter Lastname');
    //         document.myForm.lname.focus();
    //         return false;
    //     }
    //     else if (!num.value) {
    //         alert('please enter your contact num');
    //         return false;
    //     }

    //     else {

    //         alert('submited');
    //         document.myForm.submit.focus();
    //         return true;
    //     }

    // }

    // console.log('OBKJECTFFFFF', data);
    return (
        <div className="main-color">
            <div id="register"><br />
                <Form name='myform'>
                
                    <label>Enter Your FirstName :</label>
                    <input type="text" name="firstName" value={name.value} onChange={(e) => handleName(e)}   /><br />

                    <label>Enter Your LastName :</label>
                    <input type="text" name="lastName" value={lname.value} onChange={(e) => handleName(e)} />
                    <label>Contact Num :</label>
                    <input type='text' name="conatctNum" value={num.value} onChange={(e) => handleName(e)} />

                    <button type="button" onClick={submit}>submit</button>
                    <div className="table">
                        <table>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Contact Num </th>
                            </tr>
                            {
                                data.map((d, i) => {
                                    return (
                                        <tr>
                                            <td>
                                                {d.firstName}
                                            </td>
                                            <td>
                                                {d.lastName}
                                            </td>
                                            <td>
                                                {d.No}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Getdata;

