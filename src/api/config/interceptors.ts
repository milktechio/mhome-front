import { toast } from "react-toastify";
import Token from "./token";

class Interceptors {
  error = (error: any) => {
    error = error.response;
    console.log(error.data);
    switch (error.status) {
      case 422:
        for (const key in error.data.data.errors) {
          error.data.data.errors[key].map((message: any) => {
            toast.error(message, { theme: "dark" });
            return message;
          });
        }
        break;
      case 400:
      case 401:
      case 402:
      case 403:
        toast.error(error.data.msg, { theme: "dark" });
        break;
      case 404:
        toast.error("El recurso solicitado no existe", { theme: "dark" });
        break;
      case 419:
        toast.error(error.data.msg, { theme: "dark" });
        Token.destroy();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        break;
      case 500:
      default:
        toast.error("Error de servidor, contacte al administrador", {
          theme: "dark",
        });
        break;
    }
    throw error;
  };
}

const instance = new Interceptors();

export default instance;
