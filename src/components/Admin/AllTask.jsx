import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] flex flex-col gap-4 rounded-sm" style={{ padding: "10px 20px" }}>
      <div
        id="alltask"
        className="grid grid-cols-5 gap-4 bg-amber-600 text-xl font-bold rounded-sm"
        style={{ padding: "5px 10px" }}
      >
        <div className="!m-auto">Name</div>
        <div className="!m-auto">New</div>
        <div className="!m-auto">Active</div>
        <div className="!m-auto">Failed</div>
        <div className="!m-auto">Completed</div>
      </div>
      <div
        id="alltask"
        className="flex flex-col gap-4 justify-center overflow-y-auto"
      >
        {!authData
          ? ""
          : authData.employees.map((emp, idx) => {
              return (
                <div
                  key={idx}
                  className=" grid grid-cols-5 gap-4 justify-between h-10 rounded-sm border-amber-50 border-2 text-xl font-bold !px-4"
                >
                  <div className="!m-auto">{emp.name}</div>
                  <div className="text-blue-500 !m-auto">{emp.taskCounts.newtask}</div>
                  <div className=" text-yellow-500 !m-auto">
                    {emp.taskCounts.active}
                  </div>
                  <div className="  text-red-500 !m-auto">{emp.taskCounts.failed}</div>
                  <div className="text-emerald-600 !m-auto">
                    {emp.taskCounts.completed}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default AllTask;
