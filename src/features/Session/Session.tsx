import { Outlet, useNavigate } from "react-router-dom";
import { logOut } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { NavLinks } from "@/utils/types/navLinks.types";
import PagesSessionTemplate from "@/Components/PagesSessionTemplate/PagesSessionTemplate";

const Session = ({ links }: { links: NavLinks[] }) => {
  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <PagesSessionTemplate>
        <PagesSessionTemplate.SideBar
          linksList={links}
          screenWidth={screen.width}
          handler={logOutHandler}
        />
        <PagesSessionTemplate.PageDisplayContainer>
          <PagesSessionTemplate.PageDisplayHeader screenWidth={screen.width} />
          <Outlet />
          <PagesSessionTemplate.PageDisplayTabNav
            linksList={links}
            screenWidth={screen.width}
          />
        </PagesSessionTemplate.PageDisplayContainer>
      </PagesSessionTemplate>
    </>
  );
};

export default Session;
