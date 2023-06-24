import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [cred,setcred] = useState({
    email:"",password:""
});

let navigate = useNavigate()

const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/login",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({email:cred.email,password:cred.password}) 
    });
    const json = await response.json();
    console.log(json);
     if(json.success !== true){
       alert("enter valid credentials!!");
    }else{
      navigate('/');
    }
}

const onchange = (event)=>{
    setcred({...cred, [event.target.name]:event.target.value});
}

  return (
    <div>
      <div className="my-3 container">
        <form onSubmit={handleSubmit}>
          <div className="my-3 form-group">
            <label htmlFor="Email1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value = {cred.email}
              onChange={onchange}
            />
          </div>
          <div className="my-3 form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value = {cred.password}
              onChange={onchange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            SignIn
          </button>
          <Link to="/createuser" className='m-3 btn btn-danger'>New User</Link>
        </form>
      </div>
    </div>
  )
}

export default Login