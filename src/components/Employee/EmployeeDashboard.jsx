import React from 'react';
import Header from '../common/Header'
import Tasklist from '../common/TaskList';

const EmpDashboard = ({loggdata,logOut}) => {
  
    return (
        <>
     <Header loggdata={loggdata} logOut={logOut} />
     <Tasklist  loggdata={loggdata} logOut={logOut}/>
  </>
    )
}


export default EmpDashboard;