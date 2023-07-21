import axios from "axios";

export type UsersT = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
};

export async function CreateUser(props: UsersT) {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/create",
      props
    );
    console.log(response.data);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
