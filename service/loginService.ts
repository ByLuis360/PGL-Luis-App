import { User } from "../types/User";
import { asyncStorageService } from "./async-storage-service";
import axios from "axios";

const IP = "192.168.1.102";

// 172.16.98.165

const registerUser = async (user: User) => {
  const response = await fetch("http://" + IP + ":5000/auth/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullname: user.fullname,
      email: user.email,
      pswd: user.pswd,
    }),
  });

  if (response.status == 409) {
    return null;
  }

  return response.json();
};

const loginUser = async (user: User) => {
  try {
    const response = await axios.post(
      `http://${IP}:5000/auth/login`,
      {
        email: user.email,
        pswd: user.pswd,
      }
    );

    if (response.status == 401) {
      return null;
    }

    const jsonValue = response.data.object.token;
    await asyncStorageService.save(
      asyncStorageService.KEYS.userToken,
      jsonValue
    );

    return jsonValue;
  } catch (error) {}
};

const LoginService = {
  registerUser,
  loginUser,
};
export default LoginService;
