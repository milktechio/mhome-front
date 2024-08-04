import LoginImageArea from "./components/LoginImageArea/LoginImageArea";
import LoginLayOut from "./components/LoginLayOut/LoginLayOut";
import LoginInputArea from "./components/LoginInputArea/LoginInputArea";
import React, { FC } from "react";

const Login = ({
  authHandler,
}: {
  authHandler: React.MouseEventHandler<HTMLButtonElement>;
}): ReturnType<FC> => {
  return (
    <LoginLayOut>
      <LoginImageArea />
      <LoginInputArea authHandler={authHandler} />
    </LoginLayOut>
  );
};

export default Login;
