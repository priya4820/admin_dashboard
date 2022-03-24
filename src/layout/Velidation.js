// import React, { useState } from "react";
// import Header from "../component/Header1";

// function Velidation() {

//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {

//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }))
//     }

//     const submit = (e) => {
//         e.preventDefault();
//          setInputs({username:e.target.value})

//         if (!inputs.username) {
//             alert('please enter Your name.....');
//         }
//         if (!inputs.userlname) {
//             alert('Please enter Your last name.....');
//         }
//         if (!inputs.num) {
//             alert('Please enter Your mobile num');
//         }
//         if (!inputs.email) {
//             alert('Please enter Your valid email id.....');
//         }
//         if (!inputs.password) {
//             alert('Please enter Your password');
//         }
//         if (!inputs.confpassword) {
//             alert('Please enter Your Velid Conform password');
//         }

//         if (inputs.password != inputs.confpassword) {
//             alert('Your Conform Password is wrong...')
//         }


//         else {
//             alert('Your Form is Submit...')
//         }
//     }
//     return (
//         <div className="main-color">
//             <div id="register">
//                 <form onSubmit={submit}>
//                     <br />

//                     <label className="label">Registration Form</label><br />
//                     <label >Enter your name :  </label>
//                     <input type="text" name="username" value={inputs.username} onChange={handleChange} /><br /><br />
//                     <label >Enter your LastName : </label>
//                     <input type="text" name="userlname" value={inputs.userlname} onChange={handleChange} /><br /><br />
//                     <label> Mobile num :</label>
//                     <input type="text" name='num' value={inputs.usernum} onChange={handleChange} /><br /><br />
//                     <label >Enter Your Email :  </label>
//                     <input type="email" name='email' value={inputs.useremail} onChange={handleChange} /><br /><br />
//                     <label>Password :</label>
//                     <input type='password' name='password' value={inputs.userpassword} onChange={handleChange} /><br /><br />
//                     <label>Conform Password :</label>
//                     <input type='password' name='confpassword' value={inputs.userconfpassword} onChange={handleChange} /><br /><br />
//                     <button type="submit" >submit </button>
//                     <h2>{inputs.username}</h2>
//                 </form>
//             </div>

//         </div>


//     );
// }

// export default Velidation;



import React, { useState } from "react";
 import Header from "../component/Header1";

function Velidation() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submit = (e) => {
        e.preventDefault();


        if (!inputs.username) {
            alert("Please provide your name!");
            document.myForm.username.focus();
            return false;
        }

        if (!inputs.userlname) {
            alert("Please provide your Lastname!");
            document.myForm.userlname.focus();
            return false;
        }

        if (!inputs.num) {
            alert("Please provide your Contact num!");
            document.myForm.num.focus();
            return false;
        }
        if (!inputs.email) {
            alert("Please provide your Email");
            document.myForm.email.focus();
            return false;
        }
        if (!inputs.password) {
            alert('Please enter Your password');
            document.myForm.password.focus();
            return false;

        }
        if (!inputs.confpassword) {
            alert('Please enter Your Valid Conform password');
            document.myForm.confpassword.focus();
            return false;
        }
        if (inputs.password != inputs.confpassword) {
            alert('Your Conform Password is wrong...');
            document.myForm.confpassword.focus();
            return false;
        }


        else {

            alert('submited......');
            document.myForm.submit.focus();
            return true;
        }

    }
    return (
        <div className="main-color">
            <div id="register">
                <form name='myform' onSubmit={submit}>
                    <br />

                    <label className="label">Registration Form</label><br />
                    <label >Enter your name :  </label>
                    <input type="text" name="username" value={inputs.username} onChange={handleChange} /><br /><br />
                    <label >Enter your LastName : </label>
                    <input type="text" name="userlname" value={inputs.userlname} onChange={handleChange} /><br /><br />
                    <label> Mobile num :</label>
                    <input type="text" name='num' value={inputs.usernum} onChange={handleChange} /><br /><br />
                    <label >Enter Your Email :  </label>
                    <input type="email" name='email' value={inputs.useremail} onChange={handleChange} /><br /><br />
                    <label>Password :</label>
                    <input type='password' name='password' value={inputs.userpassword} onChange={handleChange} /><br /><br />
                    <label>Conform Password :</label>
                    <input type='password' name='confpassword' value={inputs.userconfpassword} onChange={handleChange} /><br /><br />
                    <button type="submit" >submit </button>
                    
                </form>
            </div>

        </div>


    );
}

export default Velidation;

