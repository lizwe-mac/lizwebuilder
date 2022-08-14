import { async } from '@firebase/util'
import e from 'cors'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEMail] = useState('')
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [error, setError] = useState('')

  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setError('');
    try{
      await createUser(email, passwordTwo)
      navigate('/javascript')
    }
    catch(e){
      setError(e.message)
      console.log("error",e.message)
    }
  }
  const checkPassword =(e)=>{
    if(e.target.value !== passwordOne) {setError('Passwords do not match')}else {
      setPasswordTwo(e.target.value)
      setError('')}
  }
  //  console.log("error",error)
  //  console.log("pass1",passwordOne)
  //  console.log("pass2",passwordTwo)
  return (
    <div className="max-w-[800px] min-w-[400px] p-5 absolute left-2/4 -translate-x-2/4 top-1/4 -translate-y-1/4 flex flex-col gap-2 border-[1px] border-orange-500 rounded-md">
      <h2 className="text-orange-500 text-lg font-nunito">
        Sign up for a free account.
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-left gap-1" action="">
        <label className=" pl-2 font-nunito text-orange-500" htmlFor="">
          Email
        </label>
        <input
          onChange={(e)=>setEMail(e.target.value)}
          className="w-full border-[1px] border-orange-500 h-8 rounded-full pl-2"
          type="email"
          placeholder="example@example.com"
          required
        />
        <label className="pl-2 font-nunito text-orange-500" htmlFor="">
          Password
        </label>
        <input
          onChange={(e)=>setPasswordOne(e.target.value)}
          className="w-full border-[1px] border-orange-600 h-8 pl-2 rounded-full"
          type="password"
          placeholder="strong password"
          required
        />
        <label className="pl-2 font-nunito text-orange-500" htmlFor="">
         Re-enter Password
        </label>
        <input
          onChange={(e) => checkPassword(e)}
          className="w-full border-[1px] border-orange-600 h-8 pl-2 rounded-full"
          type="password"
          placeholder="strong password"
          required
        />
        <p className='font-nunito text-red-500'>{error}</p>
        <button className="w-full h-8 font-nunito text-white bg-orange-500 rounded-full">
          Sign Up
        </button>
      </form>
      <p className="text-orange-500 text-sm font-nunito self-center">
        Already signed up?{" "}
        <Link className="underline text-blue-600" to="/login">
          Login
        </Link>
      </p>
    </div>
  )
}

export default Signup