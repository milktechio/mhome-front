import { jwtDecode } from "jwt-decode";

class Token {
  get = () => {
    return localStorage.getItem("token");
  };

  getPublic() {
    return process.env.REACT_APP_JWT_SECRET;
  }

  json = () => {
    return this.decode(localStorage.getItem("token") || "");
  };
  decode = (token: any) => {
    try {
      return jwtDecode(token);
    } catch (e) {
      return false;
    }
  };

  set = (token: any) => {
    return localStorage.setItem("token", token);
  };

  check = () => {
    const token = this.get();

    if (!token) return false;

    const response = this.decode(token);

    if (!response) {
      this.destroy();
      return false;
    }

    if (response?.exp && response?.exp <= new Date().getTime() / 1000) {
      this.destroy();
      return false;
    }

    return response;
  };

  destroy = () => {
    return localStorage.removeItem("token");
  };
}

export default new Token();
