import { useContext, useEffect } from "react";
import { AuthContext } from "../services/auth.context.jsx";
import { login, registration, getMe, logout, sendOTP } from "../services/auth.api";


    export const useAuth = () =>{
        const context = useContext(AuthContext)
        const {user, setUser, loading, setLoading,} = context

        const handleSendOTP = async ({ username, email, password }) => {
            setLoading(true);
            try {
                const data = await sendOTP({ username, email, password });
                return data;

            } catch (err) {
                console.log(err);
                return null;
 
            } finally {
                setLoading(false);
            }
        };

        const handleLogin = async ({email, password}) => {
            setLoading(true)
            try {
                const data = await login({email, password})
                setUser(data.user)
                return data.user
            }
            catch(err){
                console.log(err)
                return null
            }
            finally{
                setLoading(false)
            }
        }

        const handleRegistration = async ({email, otp}) => {
            setLoading(true)
            try {
                const data = await registration({email, otp})
                setUser(data.user)
                return data.user
            }
            catch(err){
                console.log(err)
                return null
            }
            finally{
                setLoading(false)
            }
        }

        const handleLogout = async () => {
            setLoading(true)
            try{
                await logout()
                setUser(null)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
            
            
        }

        useEffect(() => {
            const getAndSetUser = async() => {
            try{
                const data = await getMe()
                setUser(data.user)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
            }

            getAndSetUser()
        }, [setLoading, setUser])

        return {
            user,
            loading,
            handleLogin,
            handleRegistration,
            handleLogout,
            handleSendOTP
        };
    }
