import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';


const AllTask = () => {
   const authData=useContext(AuthContext);
   
    return (
      <>
       <div id="alltask" className='bg-black flex flex-col gap-2 justify-center !mt-10 mx-auto px-5'>
       <div className='text-white flex flex-row flex-shrink-0 gap-52 justify-center h-8 bg-amber-600  rounded-sm'>
 <div className='text-white text-xl font-bold  w-20 text-center '>Name</div>
 <div className='text-white text-xl font-bold  w-20 text-center'>New</div>
 <div className='text-white text-xl font-bold  w-20 text-center'>Active</div>
 <div className='text-white text-xl font-bold  w-20 text-center'>Failed</div>
 <div className='text-white text-xl font-bold  w-20 text-center'>Completed</div>
</div>
      </div>
        <div id="alltask" className='bg-black flex flex-col gap-2 justify-center  h-58 overflow-y-auto  mx-auto w-full  px-5'>
        {!authData?'':authData.employees.map((emp,idx)=>{
          return(
  <div key={idx} className='text-white bg-black flex flex-row flex-shrink-0 gap-52 justify-center h-10 rounded-sm border-amber-50 border-2'>
 <div className='text-white text-xl font-bold  w-20 text-center'>{emp.name}</div>
 <div className='text-blue-500 text-xl font-bold  w-20 text-center'>{emp. taskCounts.newtask}</div>
 <div className=' text-yellow-500 text-xl font-bold  w-20 text-center'>{emp. taskCounts.active}</div>
 <div className='  text-red-500 text-xl font-bold w-20 text-center'>{emp. taskCounts.failed}</div> 
 <div className='text-emerald-600 text-xl font-bold  w-20  text-center'>{emp. taskCounts.completed}</div>
</div>
        )
 
        })}
       
        
      </div>
      </>
    )
}


export default AllTask;