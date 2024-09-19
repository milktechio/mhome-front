// import { useScreenDimentions } from "@/utils/hooks/screenDimentions";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { registerUser } from "@/redux/features/user/userSlice";
// import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
// import PageSessionLayOut from "@/layouts/PageSessionLayOut/PageSessionLayOut";
// import Card from "@/Components/Card/Card";

const Register = () => {
  return (
    <>
      {/* {screen.width < 768 && (
        <PageSessionLayOut>
          <PageSessionLayOut.Header screen={screen.width} />
          
        </PageSessionLayOut>
      )}
      {screen.width >= 768 && (
        <Card>
          <Card.Header title="Registrate" />
          <Card.Body>
            <Card.Input
              inputValue={username}
              handler={(e) => setName(e.target.value)}
              placeholderText="username"
            />
            <Card.Input
              inputValue={name}
              handler={(e) => setUserName(e.target.value)}
              placeholderText="name"
            />
            <Card.Input
              inputValue={lastname}
              handler={(e) => setLastname(e.target.value)}
              placeholderText="lastname"
            />
            <Card.Input
              inputValue={email}
              handler={(e) => setEmail(e.target.value)}
              placeholderText="email"
            />
            <Card.Input
              inputValue={password}
              handler={(e) => setPassword(e.target.value)}
              placeholderText="password"
            />
            <Card.Input
              inputValue={confirmPasword}
              handler={(e) => setConfirmPasword(e.target.value)}
              placeholderText="confirm password"
            />
          </Card.Body>
          <Card.Footer>
            <Card.Button
              text="Registrar"
              handler={() => dispatch(registerUser(data))}
            />
          </Card.Footer>
        </Card>
      )} */}
    </>
  );
};

export default Register;
