import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { userContext } from './ContextComponent/UserContextComponent';

function AddUser() {
  let context = useContext(userContext)
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobNo, setMobNo] = useState("");
  let [batch, setBatch] = useState("");
  let [timings, setTimings] = useState("");

  let navigate = useNavigate();
  let submitForm = ()=>{
    let newData = {name, email, mobNo, batch,timings};
    let newArray = [...context.users];
    newArray.push(newData);
    context.setUsers(newArray);
    navigate('/dashboard');
  }

  return (
    <div className='container-fluid'>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter UserName" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e)=>setMobNo(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Batch</Form.Label>
          <Form.Control type="text" placeholder="Enter Batch Number" onChange={(e)=>setBatch(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Session Timing</Form.Label>
          <Form.Select defaultValue={"0"} onChange={(e)=>setTimings(e.target.value)}>
            <option value="0" disabled>Session Timings</option>
            <option value="10am to 12pm">10am to 12pm</option>
            <option value="12pm to 2pm">12pm to 2pm</option>
            <option value="2pm to 4pm">2pm to 4pm</option>
            <option value="4pm to 6pm">4pm to 6pm</option>
          </Form.Select>
        </Form.Group>
        
        <Button variant="primary" onClick={()=>{submitForm()}}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddUser
