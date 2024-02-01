import React, { useEffect, useState } from "react";
import "../styles/globalAuth.css";
import logo from '../../assets/LOGO BANNER.svg'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

import {FallingLines} from 'react-loader-spinner'
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../../components/toast/toastMes";

const Register = () => {
    const { userInfo } = useSelector(store => store.auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [register, {isLoading}] = useRegisterMutation()

    useEffect(()=>{
        if(userInfo){
            navigate("/")
        }
    }, [navigate, userInfo])

    const submitHandler = async(e)=> {
        e.preventDefault();
        if(password!== confirmPassword) {
            return
        }
        else {
            try {
                const res = await register( {name, email, password}).unwrap()
                dispatch(setCredentials(res))
                toastSuccess('User Created')
            } catch (error) {
                console.log( error?.data?.message || error)
                toastError(error?.data?.message )
            }
        }
        
       
    }


    return (
        <section className="auth__container" >
            <img src={logo} alt="" className="bg" />
        <h3 className="form__header" >Register</h3>
        <div className="form__content" >
            <form onSubmit={submitHandler} >
            <div className="input__content" >
            <div className="label_input" >
                <label htmlFor="name">Username </label>
                <input type="text" required autoComplete="false" value={name} onChange={(e)=>setName(e.target.value)}  />
                </div>
            <div className="label_input" >
                <label htmlFor="email"> Email </label>
                <input type="email" required autoComplete="false" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="label_input" >
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="label_input" >
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" required autoComplete="false" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  />
                </div>
            </div>
            <button className="btn auth__btn"  type="submit" >Register</button>
            </form>

        </div>
        <p className="form__sub" >
            Already have an account?{" "}
            <span>
                
                <Link to={'/login'}>
                Login instead
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

export default Register;
