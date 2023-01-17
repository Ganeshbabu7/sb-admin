import React,{useState} from 'react'
export const userContext = React.createContext();

function UserContextComponent({children}) {
    let [users, setUsers] = useState([
        {
            name : "Ganesh",
            email: "eganeshbabu7@gmail.com",
            mobNo : "9976762127",
            batch : "B38WET",
            timings : "10am to 12pm"
        },
        {
            name : "babu",
            email: "eganeshbabu7@gmail.com",
            mobNo : "7212676799",
            batch : "B38WET",
            timings : "10am to 12pm"
        }
        ])
  return <>
  <userContext.Provider value={{users,setUsers}}>
    {children}
  </userContext.Provider>
  </>
}

export default UserContextComponent
