



import React, { useState } from "react";
import { Link } from "react-router-dom";


function Condition() {
  const [Fname, setName] = useState();
  const [lName, setlName] = useState();
  const [email, setEmail] = useState();
  const [Email] = useState('bhoomi@gmail.com');
  
  const [password, setPassword] = useState();
 
 


  
  
  const submit = (e) => {
   const formValid = Fname.length > 0 && lName.length > 0 && email.length > 0 && password.length>0;
   e.preventDefault();

    // if (!formValid) {
    //   alert('Please fill up the all fields..')
    //   return;
    // }
 
   if (email == Email) {
   
      alert('Welcome admin.........');
    }
    else {
    
      alert('Welcome User....');
    }

   
  }
 
  return (
    <div>
     
 
      <form>
        <br />
        <label >Enter your name :  </label>
        <input type="text" name="firstName" value={Fname} onChange={(e) => setName(e.target.value)} /><br /><br />
     
        <label >Enter your LastName : </label>
        <input type="text" name="lastname" value={lName} onChange={(e) => setlName(e.target.value)}/><br /><br />
        <label >Enter Your Email :  </label>
        <input type="email" name="email"value={email} onChange={(e) =>setEmail(e.target.value)} /><br /><br />
        <label >Password</label>
        <input type='password' name='password'value={password} onChange={(e) =>setPassword(e.target.value)} />
           <button type="submit"  onClick={ submit}>Submit</button>
           {/* <Link to="login"><button className='btn' onClick={submit}>Login</button></Link> */}
   
   
      </form>

    </div>

  );
}

export default Condition;



