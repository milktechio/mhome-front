import { MouseEventHandler, SetStateAction } from "react";
import LoginLayOut from "@/layouts/LoginLayOut/LoginLayOut";

const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  getTokenHandler,
}: {
  email: string;
  password: string;
  setEmail: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
  getTokenHandler: MouseEventHandler;
}) => {
  return (
    <LoginLayOut>
      <LoginLayOut.SideBarComponent>
        <LoginLayOut.InputAreaContent
          inputValueEmail={email}
          inputValuePassword={password}
          onchangeHandlerEmail={(e) => setEmail(e.target.value)}
          onchangeHandlerPassword={(e) => setPassword(e.target.value)}
        />
        <LoginLayOut.LinksAreaContent />
        <LoginLayOut.ButtonAreaContent authHandler={getTokenHandler} />
      </LoginLayOut.SideBarComponent>
    </LoginLayOut>
  );
};

export default Login;
