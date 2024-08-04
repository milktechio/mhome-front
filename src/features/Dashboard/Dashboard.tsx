import { Outlet } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";

const Dashboard = () => {
  return (
    <LayOut>
      <Outlet />
    </LayOut>
  );
};

export default Dashboard;
