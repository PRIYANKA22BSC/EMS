import React  from 'react';
import Header from '../common/Header'
import Assign from './Assign'
import AllTask from './AllTask'
import AuthProvider from '../../context/Auth';



const AdminDashboard = ({loggdata,logOut}) => {

    
    return (
       <>
       <div className='w-full text-white' style={{padding:'10px 30px'}}>
       <AuthProvider>
       <Header loggdata={loggdata} logOut={logOut}/>
       <Assign/>
       <AllTask/>
       </AuthProvider>
       </div>
      
       </>
    )
}


export default AdminDashboard;