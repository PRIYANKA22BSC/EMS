import React from 'react';

const Header = ({loggdata,logOut}) => {
    return (
     <div className=' flex flex-row justify-between h-28 w-auto '>
    <div className='h-25 text-4xl text-white !ml-2 !mt-3 '>Hello <p className='font-bold'>{loggdata.name} 👋</p></div>
     <button onClick={(e)=>logOut(e)} className='bg-red-800 h-12 rounded-sm text-white cursor-pointer text-xl !px-5 !mr-2 !mt-6 text-center '>Log Out</button>
     </div>
    )
}
export default Header;