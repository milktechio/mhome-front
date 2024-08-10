import { Outlet } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import { useScreenDimentions } from "../../utils/hooks/useScreenDimentions";

const Dashboard = () => {
  const screen = useScreenDimentions();
  return (
    <LayOut>
      <LayOut.SideBar screenWidth={screen.width} />
      <LayOut.PageDisplayContainer>
        <LayOut.PageDisplayHeader screenWidth={screen.width} />
        <Outlet />
        <LayOut.PageDisplayTabNav screenWidth={screen.width}/>
      </LayOut.PageDisplayContainer>
    </LayOut>
  );
};

export default Dashboard;
