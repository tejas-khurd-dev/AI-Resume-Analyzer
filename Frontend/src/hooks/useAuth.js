    import { useContext, useEffect } from "react";
    import { AuthContext } from "../services/auth.context.jsx";
    import { login, registration, getMe, logout, sendOTP } from "../services/auth.api";
    import toast from "react-hot-toast";


    export const useAuth = () =>{
        const context = useContext(AuthContext)
        const {user, setUser, loading, setLoading,} = context

        const handleSendOTP = async ({ username, email, password }) => {
            setLoading(true);
            try {
                await sendOTP({username,email,password,});

                return;

            } catch (err) {
                console.log(err);
 
            } finally {
                setLoading(false);
            }
        };

        const handleLogin = async ({email, password}) => {
            setLoading(true)
            try {
                const data = await login({email, password})
                setUser(data.user)
            }
            catch(err){
                console.log(err)
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
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }

        const handleLogout = async () => {
            setLoading(true)
            try{
                const data = await logout()
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
        }, [])

        return {
            user,
            loading,
            handleLogin,
            handleRegistration,
            handleLogout,
            handleSendOTP
        };
    }

