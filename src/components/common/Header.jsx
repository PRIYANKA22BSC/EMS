import React from "react";

const Header = ({ loggdata, logOut }) => {
  return (
    <div className=" flex justify-between h-28">
      <div className="h-25 text-4xl text-white">
        Hello <p className="font-bold">{loggdata.name} 👋</p>
      </div>
      <button
        onClick={(e) => logOut(e)}
        className="bg-red-800 h-12 rounded-sm text-white cursor-pointer text-xl !px-5 text-center"
      >
        Log Out
      </button>
    </div>
  );
};
export default Header;
