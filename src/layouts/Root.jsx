import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="w-60 min-h-screen bg-red-300"></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
