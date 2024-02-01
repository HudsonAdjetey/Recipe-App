import { useEffect, useState } from "react"

import {BiArrowBack} from 'react-icons/bi'

import '../styles/profile.css'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useUpdateMutation } from "../../slices/usersApiSlice"
import { setCredentials } from "../../slices/authSlice"
import { toastError, toastSuccess } from "../../components/toast/toastMes"



const Profile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const {userInfo} = useSelector(store => store.auth)
  /* 
  set the idLogins
  
  */

  const [update, {isLoading}] = useUpdateMutation()
  const dispatch = useDispatch()


  useEffect(()=>{
    setEmail(userInfo.email)
    setName(userInfo.name)
  },[userInfo.setName, userInfo.setEmail])


  const submitHandler = async(e) => {
    e.preventDefault()
      if(password !==confirmPassword){
        // console.log('Hello')
        toastError('Password does not match')
        return
      }else{
        try {
          const res = await update({ name, email, password }).unwrap()
          dispatch(setCredentials(res))
          toastSuccess("Updated Successfully")
        } catch (error) {
          console.log(error.message)
          // toastError(error.message)
          toastError("Something went wrong")
        }
      }
  }

  return (
    <div id='profile' >
      <Link to={"/"} className="backBtn"  id="setBack" >
     <BiArrowBack   />
     <h3> Update Profile</h3>
      </Link>
        <div className="form__content"   >
            <form onSubmit={submitHandler} >
            <div className="input__content" >
            <div className="label_input" >
                <label htmlFor="name">Username </label>
                <input type="text" required  autoComplete="false" value={name} onChange={(e)=>setName(e.target.value)}  />
                </div>
            <div className="label_input" >
                <label htmlFor="email"> Email </label>
                <input type="email" required  autoComplete="false" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="label_input" >
                <label htmlFor="password">Password</label>
                <input type="password"  autoComplete="false" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="label_input" >
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password"  autoComplete="false" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  />
                </div>
            </div>
            <button className="btn auth__btn"  type="submit" >Update</button>
            </form>

        </div>
    </div>
  )
}

export default Profile