import React  from 'react';
import Header from '../common/Header'
import Assign from './Assign'
import AllTask from './AllTask'
import AuthProvider from '../../context/Auth';



const AdminDashboard = ({loggdata,logOut}) => {

    
    return (
       <>
       <AuthProvider>
       <Header loggdata={loggdata} logOut={logOut}/>
       <Assign/>
       <AllTask/>
       </AuthProvider>
      
       </>
    )
}


export default AdminDashboard;