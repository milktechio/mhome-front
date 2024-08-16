import { Link, Outlet, useNavigate } from "react-router-dom";
import { useScreenDimentions } from "../../utils/hooks/screenDimentions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { linksSideBarUser } from "../../utils/data/SideBar.utils";
import { loginUser, logOut } from "../../redux/features/user/userSlice";
import { useState } from "react";
import PagesSessionTemplate from "../../Components/PagesSessionTemplate/PagesSessionTemplate";
import PageLoginTemplate from "../../Components/PageLoginTemplate/PageLoginTemplate";
import "./Login.css";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.payloadLogin);
  const screen = useScreenDimentions();

  const loginSessionHandler = () => {
    const data = { email: email, password: password };
    dispatch(loginUser(data));
    navigate("/user-home");
  };

  return (
    <>
      {!token && (
        <PageLoginTemplate>
          <PageLoginTemplate.ImageLogoSection />
          <PageLoginTemplate.InputSection authHandler={loginSessionHandler}>
            <PageLoginTemplate.InputBox
              inputValueEmail={email}
              inputValuePassword={password}
              onchangeHandlerEmail={(e) => setEmail(e.target.value)}
              onchangeHandlerPassword={(e) => setPassword(e.target.value)}
            />
            <Link to="/register">regístrate!</Link>
          </PageLoginTemplate.InputSection>
        </PageLoginTemplate>
      )}

      {token && (
        <PagesSessionTemplate>
          <PagesSessionTemplate.SideBar
            linksList={linksSideBarUser}
            screenWidth={screen.width}
            handler={() => dispatch(logOut())}
          />
          <PagesSessionTemplate.PageDisplayContainer>
            <PagesSessionTemplate.PageDisplayHeader
              screenWidth={screen.width}
            />
            <Outlet />
            <PagesSessionTemplate.PageDisplayTabNav
              linksList={linksSideBarUser}
              screenWidth={screen.width}
            />
          </PagesSessionTemplate.PageDisplayContainer>
        </PagesSessionTemplate>
      )}
    </>
  );
}

export default App;
