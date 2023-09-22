// import User from "../interfaces/user";
// import Team from "../interfaces/team";
import axios, {AxiosError} from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/api",
});

const wApi = axios.create({
  baseURL: "http://localhost:3003",
})

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};


export const auth = async (email: string, password:string) => {
  try {
    const jwt = await api.post("/authentication_token", {email, password});
    return jwt.data.access_token;
  } catch (err) {
    if(err instanceof AxiosError){
        throw err.response?.data ? err.response?.data.message : null;
      }
    }
  };
  
  export const getUser= async(id:string) => {
    try{
      const user = await wApi.get(`${id}`,);
      return user.data;
    }catch(err){
      console.log("getUser : ", getErrorMessage(err))
      if(err instanceof AxiosError){
        throw err.response?.data ? err.response?.data.message : null;
    }
    } 
  }
  export const getUsers = async (token: string) => {
  try {
    const users = await api.get("/users", {headers:{Authorization:`Bearer ${token}`}});
    return users.data;
  } catch (err) {
    console.log("getUsers : ", getErrorMessage(err));
  }
};

