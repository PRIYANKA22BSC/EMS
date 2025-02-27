import React from 'react';


const NewTask = ({loggdata} ) => {
    return(
        <div className='  flex-shrink-0 bg-[#80ed99] w-96 h-50 rounded-sm flex flex-col gap-3 !p-4 text-white '><div className='flex flex-row justify-between'><div className='text-sm bg-red-800 text-white text-center rounded-sm !px-2 !py-1'>{loggdata.category}</div><div className='text-sm text-white'>{loggdata.date}</div></div>
               <div><p className='text-white  font-bold'>{loggdata.title}</p><p className='text-sm text-white !mt-1 '>{loggdata.description}</p></div>
               <div className='flex flex-row justify-between'>
                <button className=' bg-[#fcf300]  text-white w-40 h-10  rounded-sm'>AcceptTask</button>
               
               </div>
               
               </div>
             )
  
}


export default NewTask;