import React, { useContext,useState } from 'react';
import {AuthContext} from '../../context/Auth.jsx';

const Assign = () => {
const authData=useContext(AuthContext);
    const[title,setTitle]=useState("");
    const[date,setDate]=useState("");
    const[category,setCategory]=useState("");
    const[assign,setAssign]=useState("");
    const[desc,setDesc]=useState("");
    const[task,setTask]=useState({});
    const submitHandler=(e)=>{
    e.preventDefault();  
    setTask({title,date,category,assign,desc,active:false,newtask:true,failed:true,completed:false});  
    console.log(authData.employees);
    {!authData.employees?'':authData.employees.forEach((ele)=>{
     if(ele.name==assign){
     console.log(ele.tasks.push(task));
     ele.taskCounts.task=ele.taskCounts.task+1;
     console.log(ele);
     }
      })};
      setTitle("");
      setDate("");
      setCategory("");
      setAssign("");
      setDesc("");
    }
    return (
   <>
   <h1 className='text-white'>{date}</h1>
        <form onSubmit={(e)=>submitHandler(e)}  className='bg-[#1c1c1c] flex flex-row gap-5 h-80 rounded-sm w-full box-border'>
        <div className='flex flex-col flex-wrap gap-3 justify-center w-1/2 px-3 '>
          <label className='text-white'>
            Task Title <br/>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter Task' required className='text-white border-white border-2 rounded-sm outline-none placeholder-white h-10 px-2 w-4/5  ' />
          </label>
          <label className='text-white'>
            Date <br/>
            <input value={date} onChange={(e)=>setDate(e.target.value)}  type="date" required className='text-white border-white border-2 rounded-sm placeholder-white outline-none h-10 px-2 w-4/5' />
          </label>
          <label className='text-white'>
            Assign to <br/>
            <input value={assign} onChange={(e)=>setAssign(e.target.value)}  type="text" placeholder='Employee name' required className='text-white border-white border-2 outline-none rounded-sm placeholder-white h-10 px-2 w-4/5' />
          </label>
          <label className='text-white'>
            Category <br/>
            <input value={category} onChange={(e)=>setCategory(e.target.value)}  type="text" placeholder='Design, Dev, etc' required className='text-white border-white border-2 outline-none rounded-sm placeholder-white h-10 px-2 w-4/5' />
          </label>
        </div>
        <div className='flex flex-col   w-1/2 p-3 box-border '>
          <label className='text-white !mt-4 '>
            Description <br/> 
            <textarea value={desc} onChange={(e)=>setDesc(e.target.value)}  required className='text-white border-white border-2 outline-none rounded-sm placeholder-white h-40  w-5/6'></textarea>
          </label>
          <button className='text-white bg-emerald-600 h-10 rounded-sm mt-2 w-5/6  '>Create Task</button>
        </div>
      </form>
      </>
      )
}
export default Assign;