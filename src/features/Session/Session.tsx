import { Outlet } from "react-router-dom";
import { logOut } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
import { NavLinks } from "@/utils/types/navLinks.types";
import PageSessionLayOut from "@/layouts/PageSessionLayOut/PageSessionLayOut";

const Session = ({ links }: { links: NavLinks[] }) => {
  const screen = useScreenDimentions();
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <>
      <PageSessionLayOut>
        <PageSessionLayOut.Header screen={screen.width} />
        <PageSessionLayOut.SideBar
          screen={screen.width}
          links={links}
          handler={logOutHandler}
        />
        <PageSessionLayOut.Content>
          <Outlet />
        </PageSessionLayOut.Content>
      </PageSessionLayOut>
    </>
  );
};

export default Session;
