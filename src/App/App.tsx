import { Outlet, useNavigate } from "react-router-dom";
import { useScreenDimentions } from "../utils/hooks/screenDimentions";
import { setDataHanlder } from "../utils/handlers/setDataHandlers";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { loginUser, logOut } from "../redux/features/user/userSlice";
import { useState } from "react";
import Login from "../features/Login/Login";
import PagesSessionTemplate from "../Components/PagesSessionTemplate/PagesSessionTemplate";
import "./App.css";

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
    navigate("/Home");
  };

  return (
    <>
      {!token && (
        <Login
          inputValueEmail={email}
          inputValuePassword={password}
          authHandler={loginSessionHandler}
          onchangeHandlerEmail={(e) => setDataHanlder(e, setEmail)}
          onchangeHandlerPassword={(e) => setDataHanlder(e, setPassword)}
        />
      )}
      {token && (
        <PagesSessionTemplate>
          <PagesSessionTemplate.SideBar
            screenWidth={screen.width}
            handler={() => dispatch(logOut())}
          />
          <PagesSessionTemplate.PageDisplayContainer>
            <PagesSessionTemplate.PageDisplayHeader
              screenWidth={screen.width}
            />
            <Outlet />
            <PagesSessionTemplate.PageDisplayTabNav
              screenWidth={screen.width}
            />
          </PagesSessionTemplate.PageDisplayContainer>
        </PagesSessionTemplate>
      )}
    </>
  );
}

export default App;
