import React, { useContext } from 'react';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const { singin } = useContext(AuthContext)

  const { register, handleSubmit } = useForm();
  const hnadleLogin = data => {
    console.log(data)
    singin(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.error(error))
  }

  return (
    <div className=' flex justify-center items-center h-[800px]   '>
      <div className='w-96'>
        <h3 className='text-4xl text-center'>Log in </h3>
        <form onSubmit={handleSubmit(hnadleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
            <label className="label"><span className="label-text">Forget password</span></label>
            <input className='btn btn-accent w-full' value='Login' type="submit" />
          </div>
        </form>
        <p>New to doctors portal? <Link to='/singup' className='text-secondary'>Create new account</Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;