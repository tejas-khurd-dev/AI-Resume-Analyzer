import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/auth",
    withCredentials:true
})

export async function sendOTP({ username, email, password }) {
  try {
    const response = await api.post("/send-otp", {username,email,password,});

    return response.data;

  } catch (error) {
    console.error(error);
  }
}

export async function registration({ email, otp }) {
  try {
    const response = await api.post("/register", {email,otp,});

    return response.data;
    
  } catch (error) {
    console.error(error);

  }
}


export async function login({email, password}) {
    try {
      const response = await api.post("/login",{email, password});

      console.log("Login Successful:");

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

      console.log("User fetch successful:");

      return response.data

    } 
    catch (error) {
      console.error(error);
    }
}