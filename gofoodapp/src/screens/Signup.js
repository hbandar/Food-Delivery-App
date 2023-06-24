import {React,useState} from "react";
import {Link} from "react-router-dom";


export default function Signup() {

    const [cred,setcred] = useState({
        name:"",email:"",password:"",location:""
    });

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createuser",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name:cred.name,email:cred.email,password:cred.password, location:cred.location}) 
        });
        const json = await response.json();
        console.log(json);
         if(!json.success){
           alert("enter valid credentials!!");
        }
    }

    const onchange = (event)=>{
        setcred({...  cred, [event.target.name]:event.target.value});
    }

  return (
    <div>
      <div className="my-3 container">
        <form onSubmit={handleSubmit}>
          <div className="my-3 form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              value = {cred.name}
              onChange={onchange}
            />
          </div>
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
          <div className="my-3 form-group">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="Enter address"
              value = {cred.location}
              onChange={onchange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to = "/login"className='m-3 btn btn-danger'>Existing User</Link>
        </form>
      </div>
    </div>
  );
}
