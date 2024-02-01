import React, { useEffect, useState } from "react";
import "../styles/globalAuth.css";
import logo from '../../assets/LOGO BANNER.svg'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { FallingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import { toastSuccess,toastError } from "../../components/toast/toastMes";
import { useCookies } from "react-cookie";


const Login = () => {
    const [email, setEmail]  = useState('')
    const [password, setPassword] = useState('')
 
    
    const { userInfo } = useSelector((store)=> store.auth)
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()
    const navigate = useNavigate()


    useEffect(()=>{
        if(userInfo){
            navigate("/")
        }
    }, [userInfo, navigate])


    const submitLoginHandler = async(e) => {
        e.preventDefault();
      
            try {
                const res = await login( { email, password}).unwrap()
                dispatch(setCredentials(res))
                toastSuccess('Logged In')

                setEmail("")
                setPassword("")
            
            } catch (error) {
                console.log(error?.data?.message || error )
                toastError(error?.data?.message || error)
            }
        
    
    }

    return (
        <section className="auth__container" >
            <img src={logo} alt="" className="bg" />
        <h3 className="form__header" >Login</h3>
        <div className="form__content" >
            <form onSubmit={submitLoginHandler} >
            <div className="input__content" >
                <div className="label_input" >
                <label htmlFor="email">Email Address </label>
                <input type="email" required autoComplete="false" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="label_input" >
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" value={password}  onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            <button className="btn auth__btn" type="submit" >Login</button>
            </form>

        </div>
        <p className="form__sub" >
            Already have an account?{" "}
            <span>
                <Link to={"/register"}>
                Register instead
                </Link>
            </span>
            </p>
            {isLoading && (
                    <p className="preloader">
                                <FallingLines
                                color="#000"
                                width="120"
                                visible={true}
                                ariaLabel='falling-lines-loading'
                              />
                              </p>
                )}
        </section>
    );
};

export default Login;
