import React, { useState } from 'react'
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import Login from './Login';

const SignUp = () => {
    const[name ,setname]=useState("");
    const[email ,setemail]=useState("");
    const[password,setpassword]=useState('');
    const [ error ,seterror]=useState('');
    const navigate = useNavigate();
 

    const handleSubmit = async(e)=>{
     
e.preventDefault();

if (!name & name<10) {
    seterror("please enter user name");

    return;
  }

  if (!email  ) {
    seterror("please enter email");
    return;
  }
//   else {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     seterror("Please enter a valid email");
//   } 
// }
  if (!password) {
    alert("Please enter a password");
    return;
  }
try {
    const response = await axios.post("http://localhost:8080/name/save",{ 
       name ,
       email,
       password});
      
    console.log(response.data);
    alert("sign up in succesfull")
    navigate('/login');

} catch (error) {
    seterror("please try again");
}




    }
  return (
<div  className='signup'>

<div className='formsignup'>
<h2 className='h2signup'> sign up</h2>
<div className='InputSignup'>

 <label>Username</label>
 <input className='Inputsi' type='text' placeholder='username' value={name} onChange={(e)=>setname(e.target.value)}/>

<lable>Email</lable>
  <input className='Inputsi' type='email' placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>

<label>Password</label>
  <input className='Inputsi' type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

  <div><button  className='btnsignup' type='submit' onClick={handleSubmit}>SignUp</button></div> 

  <p className="btnlink">Have already an account? <a href="#!"
                   ><u>  <Link   to={'/Login'}>Login here</Link></u></a></p>
  </div>


  
 <div style={{color:"red"}}>{error && <p>{error}</p>}</div>
 </div>
</div>
  )
}

export default SignUp