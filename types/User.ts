import { password } from "@inquirer/prompts";

export type User = {
  fullname: string;
  email: string;
  pswd: string;
  token: string;
};

export const getDefaultUser = () => {
  return {
    fullname: "",
    email: "",
    pswd: "",
    token: "",
  };
};
