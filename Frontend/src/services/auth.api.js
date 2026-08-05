import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/auth",
    withCredentials:true
})

export async function registration({username, email, password}) {
    try {
      const response = await api.post("/register",{username, email, password});

      console.log("Registration Successful:", response.data);

      return response.data

    } 
    catch (error) {
      console.error(`Registration failed, ${error}`);
    }
}


export async function login({email, password}) {
    try {
      const response = await api.post("/login",{email, password});

      console.log("Login Successful:", response.data);

      return response.data

    } 
    catch (error) {
      console.error(`Login failed, ${error}`);
    }
}

export async function logout() {
    try {
      const response = await api.get("/logout");

      console.log("Logout Successful:");

      return 

    } 
    catch (error) {
      console.error(`Logout failed, ${error}`);
    }
}

export async function getMe() {
    try {
      const response = await api.get("/get-me");

      console.log("User fetch successful:", response.data);


      return response.data

    } 
    catch (error) {
      console.error(`Logout failed, ${error}`);
    }
}