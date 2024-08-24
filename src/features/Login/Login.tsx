import { Link } from "react-router-dom";
import { MouseEventHandler, SetStateAction } from "react";
import PageLoginTemplate from "@/Components/PageLoginTemplate/PageLoginTemplate";

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
    <PageLoginTemplate>
      <PageLoginTemplate.ImageLogoSection />
      <PageLoginTemplate.InputSection authHandler={getTokenHandler}>
        <PageLoginTemplate.InputBox
          inputValueEmail={email}
          inputValuePassword={password}
          onchangeHandlerEmail={(e) => setEmail(e.target.value)}
          onchangeHandlerPassword={(e) => setPassword(e.target.value)}
        />
        <Link to="/register">regístrate!</Link>
      </PageLoginTemplate.InputSection>
    </PageLoginTemplate>
  );
};

export default Login;
