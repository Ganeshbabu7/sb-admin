import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import Todo from './Components/Todo';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NestedComponent from './Components/NestedComponents/NestedComponent';
import Profile from './Components/NestedComponents/Profile'
import Account from './Components/NestedComponents/Account'
import UseRef from './Components/NestedComponents/UseRef';
import UseReducer from './Components/NestedComponents/UseReducer';
import AllUsers from './Components/CRUDComponents/AllUsers';
import Addusers from './Components/CRUDComponents/Addusers';
import UserContextComponent from './Components/ContextComponent/UserContextComponent';
import DashboardContextComponent from './Components/ContextComponent/DashboardContextComponent';

function App() {
  return <>
    <div id="wrapper">
    <UserContextComponent>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={
              <DashboardContextComponent>
                <Dashboard />
              </DashboardContextComponent>}/>
          <Route path='/addUser' element={
              <AddUser/>}/>
          <Route path='/editUser/:id' element={
              <EditUser/>}/>
          <Route path='/nestedcomponent' element={<NestedComponent/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='useref' element={<UseRef/>}/>
            <Route path='usereducer' element={<UseReducer/>}/>
          </Route>
          
          <Route path='/todolist' element={<Todo/>}></Route>
          <Route path='/allusers' element={<AllUsers/>}></Route>
          <Route path='/addusers' element={<Addusers/>}></Route>
          <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
        </Routes>
      </BrowserRouter>
      </UserContextComponent>
    </div>
</>
}

export default App;