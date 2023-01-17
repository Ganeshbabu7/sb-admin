import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { Button } from 'react-bootstrap'

function UseRef() {
    let [name, setName] = useState("")
    let count = useRef(0)
    let roll = useRef(null)
    useEffect (()=>{
        count.current = count.current+1;
    })
  return <>
    <h1>Use Ref</h1>
    <div className="container-fluid">
        <input type={"text"} placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)} className="container-fluid"/><br/>
        <div>Count Current : {count.current}</div><br/>
        <input type={"text"} placeholder="Enter Roll No." ref={roll} className="container-fluid"/> <br/> <br/>
        <Button variant='primary' onClick={()=>roll.current.focus()}> Click Me </Button>
    </div>
  </>
}

export default UseRef