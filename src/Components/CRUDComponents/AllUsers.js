// import React, { useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import { Button } from 'react-bootstrap';
// import {useNavigate} from 'react-router-dom';

// function AllUsers() {
//     let [users,setUsers] = useState("")
//     let navigate = useNavigate();    
//     let userDelete = async()=>{
//     }

//   return <div className='container-fluid'>
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Date of Birth</th>
//           <th>Email id</th>
//           <th>Mobile Number</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//         users.map ((e)=>{
//             return <tr key={e.id}>
//                 <td>{e.firstName}</td>
//                 <td>{e.lastName}</td>
//                 <td>{e.dob}</td>
//                 <td>{e.email}</td>
//                 <td>{e.mobileNumber}</td>
//                 <td>
//                     <Button variant="primary" onClick={()=> navigate(`/editUser/${e}`)}>
//                         <i className="fas fa-pen-to-square">&nbsp;&nbsp;</i>Edit</Button>
//                         &nbsp;
//                         &nbsp;
//                     <Button variant="danger" onClick={()=>{userDelete(e)}}>
//                         <i className="fas fa-trash">&nbsp;&nbsp;</i>Delete</Button>
//                 </td>
//             </tr>
//             })
//         }
//       </tbody>
//     </Table>
//   </div>
// }

// export default AllUsers
