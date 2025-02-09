import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.jsx";

const Assign = () => {
  const authData = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assign, setAssign] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      title,
      date,
      category,
      assign,
      desc,
      active: false,
      newtask: true,
      failed: true,
      completed: false,
    });
    console.log(authData.employees);
    {
      !authData.employees
        ? ""
        : authData.employees.forEach((ele) => {
            if (ele.name == assign) {
              ele.tasks = [...ele.tasks, task];
              ele.taskCounts.task = (ele.taskCounts.task || 0) + 1;
              console.log(ele);
            }
          });
    }
    setTitle("");
    setDate("");
    setCategory("");
    setAssign("");
    setDesc("");
  };
  return (
    <>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="bg-[#1c1c1c] grid lg:grid-cols-2 md:grid-cols-1 lg:gap-20 gap-3 rounded-sm w-full box-border"
        style={{ padding: "30px", margin: "10px 0" }}
      >
        <div className=" flex flex-col gap-3">
          <div className="">
            <label className="flex flex-col gap-1">
              Task Title
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Task"
                required
                className=" border-white !px-2 border-2 rounded-sm outline-none placeholder-white h-10  "
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-1">
              Date
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                required
                className=" border-white !px-2 border-2 rounded-sm placeholder-white outline-none h-10 "
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-1">
              Assign to
              <input
                value={assign}
                onChange={(e) => setAssign(e.target.value)}
                type="text"
                placeholder="Employee name"
                required
                className=" border-white !px-2 border-2 outline-none rounded-sm placeholder-white h-10 "
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-1">
              Category
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Design, Dev, etc"
                required
                className=" border-white !px-2 border-2 outline-none rounded-sm placeholder-white h-10 "
              />
            </label>
          </div>
        </div>
        <div className="box-border flex flex-col gap-4">
          <div className="h-[100%]">
            <label className="flex flex-col gap-1 h-[100%] min-h-[100px]">
              Description
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                className="h-[90%] border-white !px-2 border-2 outline-none rounded-sm placeholder-white w-full"
              ></textarea>
            </label>
          </div>
          <button className=" bg-emerald-600 h-10 rounded-sm mt-2 w-full  ">
            Create Task
          </button>
        </div>
      </form>
    </>
  );
};
export default Assign;
