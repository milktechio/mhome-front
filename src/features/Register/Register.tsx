import { useState } from "react";
import { setDataHanlder } from "../../utils/handlers/setDataHandlers";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/user/userSlice";
import ButtonBackNavigation from "../../Components/Buttons/ButtonBackNavigation/ButtonBackNavigation";
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary/ButtonPrimary";
import InputSimple from "../../Components/Inputs/InputSimple/InputSimple";

const Register = () => {
  const [username, setUserName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPasword, setConfirmPasword] = useState<string>("");

  const dispatch = useDispatch();
  const data = {
    username: username,
    name: name,
    lastname: lastname,
    email: email,
    password: password,
    confirmpassword: confirmPasword,
  };

  return (
    <div>
      <header>
        <ButtonBackNavigation />
      </header>
      <main>
        <div>
          <InputSimple
            placeholderText="username"
            inputValue={username}
            handler={(e) => setDataHanlder(e, setUserName)}
          />
          <InputSimple
            placeholderText="name"
            inputValue={name}
            handler={(e) => setDataHanlder(e, setName)}
          />
          <InputSimple
            placeholderText="lastname"
            inputValue={lastname}
            handler={(e) => setDataHanlder(e, setLastname)}
          />
          <InputSimple
            placeholderText="email"
            inputValue={email}
            handler={(e) => setDataHanlder(e, setEmail)}
          />
          <InputSimple
            placeholderText="password"
            inputValue={password}
            handler={(e) => setDataHanlder(e, setPassword)}
          />
          <InputSimple
            placeholderText="confirm password"
            inputValue={confirmPasword}
            handler={(e) => setDataHanlder(e, setConfirmPasword)}
          />
        </div>
        <div>
          <ButtonPrimary
            clickHandler={() => dispatch(registerUser(data))}
            text="Registrar"
          />
        </div>
      </main>
    </div>
  );
};

export default Register;
