import React, { useEffect } from 'react'
import { useState } from 'react'
import Login from './components/Auth-login/login.jsx'
import { useContext } from 'react';
import {AuthContext} from './context/Auth.jsx'
import EmpDashboard from './components/Employee/EmployeeDashboard'
import AdminDashboard from './components/Admin/AdminDashboard'
import { getlocalstorage } from './components/common/localstorage.jsx';


 
function App() {
  const [user,setUser] = useState("");
  const [loggeduser,setloggedUser] = useState("");
  const authData=useContext(AuthContext);

useEffect(()=>{
  const loginuser=localStorage.getItem('loggedInUser')
   if(loginuser){
   const userData=JSON.parse(loginuser); 
   setUser(userData.role);
   setloggedUser(userData.data);
  } 
},[]);
  const handleLogin=(email,pass)=>{
    const admin=authData.admins.find((ele)=>{return ele.email==email && ele.password==pass});
    if(admin){
     setUser('admin');
     setloggedUser(admin);
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}));
      return;
    }
    else if(authData){
      const employee=authData.employees.find((ele)=>{return ele.email==email && ele.password==pass});
      if(employee){
        setUser('employee' );
        setloggedUser(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
        return;
      }
    }
    if(!admin || !employee) {
      alert('Invalid Credentials.');
      return;
    }
  }
  const logOut=(e)=>{
    localStorage.removeItem('loggedInUser');
    setloggedUser("");
    setUser("");
  }
  return (
<>

{!user?<Login handleLogin={handleLogin}/>: null};
{user ==='admin'? <AdminDashboard loggdata={loggeduser} logOut={logOut} />:null};
{user ==='employee'? <EmpDashboard loggdata={loggeduser} logOut={logOut}/>:null};

</>
  )
}

export default App
