import {
  linksSideBarAdmin,
  linksSideBarUser,
} from "@/utils/data/SideBar.utils";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getMyProfile, loginUser } from "../../redux/features/user/userSlice";
import { useEffect, useState } from "react";
import { NavLinks } from "@/utils/types/navLinks.types";
import Session from "../Session/Session";
import Login from "../Login/Login";
import "./App.css";
import { jwtDecode } from "jwt-decode";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [links, setLinks] = useState<NavLinks[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.payloadLogin);
  const profile = useAppSelector((state) => state.user.dataMyProfile);
  const profileSuccess = useAppSelector((state) => state.user.successMyProfile);
  const profilePending = useAppSelector((state) => state.user.pendingMyProfile);
  const [loading, setLoading] = useState(true)

  const getTokenHandler = () => {
    const data = { email: email, password: password };
    dispatch(loginUser(data));
  };


  useEffect(()=>{

    let tokenStoraged = localStorage.getItem('token') || false

  
    if(tokenStoraged) {
      let tryDecode = async()=>jwtDecode(tokenStoraged)

      tryDecode().then((res)=>{
        console.log(res)
        dispatch(getMyProfile(tokenStoraged));
      }).catch(()=>setLoading(false))
      
    }else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (token && profile?.profile?.name === "") {
      dispatch(getMyProfile(token));
    }

    if (token && profile?.roles?.[0].name === "administracion") {
      setLinks(linksSideBarAdmin);
      navigate("/admin-home");
      setLoading(false)
    }

    if (token && profile?.roles?.[0].name === "usuario") {
      setLinks(linksSideBarUser);
      navigate("/user-home");
      setLoading(false)
    }
  }, [dispatch, navigate, token, profile?.profile?.name, profile?.roles]);

  return (
    <>
      {!token && profile?.profile?.name==""  && !loading &&  (
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          getTokenHandler={getTokenHandler}
        />
      )}
      {token && loading && <div>Loading...</div>}
      {token && profileSuccess && !loading && <Session links={links} />}
    </>
  );
}

export default App;
