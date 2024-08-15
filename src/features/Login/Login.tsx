import { FC } from "react";
import { LoginInputData } from "./utils/login.types";
import LoginImageArea from "./components/LoginImageArea/LoginImageArea";
import LoginLayOut from "./components/LoginLayOut/LoginLayOut";
import LoginInputArea from "./components/LoginInputArea/LoginInputArea";

const Login = ({
  inputValueEmail,
  inputValuePassword,
  authHandler,
  onchangeHandlerEmail,
  onchangeHandlerPassword,
}: LoginInputData): ReturnType<FC> => {
  return (
    <LoginLayOut>
      <LoginImageArea />
      <LoginInputArea
        inputValueEmail={inputValueEmail}
        inputValuePassword={inputValuePassword}
        authHandler={authHandler}
        onchangeHandlerEmail={onchangeHandlerEmail}
        onchangeHandlerPassword={onchangeHandlerPassword}
      />
    </LoginLayOut>
  );
};

export default Login;
