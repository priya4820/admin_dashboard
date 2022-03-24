import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";

export default function Data() {


    

    const [name, setName] = useState({
        value: '',
        show: ''
    });

    

    const handleChange = (e) => {
        setName({ value: e.target.value })
     
    }

    const submit = () => {
    
        setName({ show: name.value })
        alert('A name is submit: ' + name.value);
         
       
         
    }
  
   
    return (
        <div className="main-color">
            <div id="register"><br />
                <Form>
                    <label>Enter Your Name :</label>
                    <input type="text" name="username" value={name.value} onChange={(e) => handleChange(e)} />
                  
                   <button type="button" onClick={submit}>Submit</button>
                 
                  {/* <Link to="User"><button className='btn' onClick={submit}>Submit</button></Link> */}


                    {/* <table className="table">
                        <tr>
                            name
                            <td>
                                {name.name}
                            </td>
                            </tr>
                        
                    </table> */}
                   
                </Form>

            


            </div>




        </div>
    )
}




// import React, {useState} from 'react'
// import { Form } from "reactstrap";
// export default function Data(){
//     const [fName, setfName] = useState('');
//     const [lName, setlName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');

// const submitValue = () => {
//     const frmdetails = {
//         'First Name' : fName,
//         'Last Name' : lName,
//         'Phone' : phone,
//         'Email' : email
//     }
//     console.log(frmdetails);
// }

// return(
//    <div className="main-color">
//       <div id="register"><br />
//         <Form onSubmit={() => submitValue()}>
//     <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
//     <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
//     <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
//     <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
//     <button type='submit'>Submit</button>
//     </Form>
//     </div>
//     </div>
//     )
   
// }


 
