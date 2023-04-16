import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Singup = () => {
  const { register, handleSubmit } = useForm()
  const handleSingup = (data) => {
    console.log(data)
  }
  return (
    <div className=' flex justify-center items-center h-[800px]   '>
      <div className='w-96'>
        <h3 className='text-4xl text-center'>singup </h3>
        <form onSubmit={handleSubmit(handleSingup)}>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
            <label className="label"><span className="label-text">Forget password</span></label>
            <input className='btn btn-accent w-full' value='singup' type="submit" />
          </div>
        </form>
        <p>allready have an account  <Link to='/login' className='text-secondary'>singup</Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Singup;