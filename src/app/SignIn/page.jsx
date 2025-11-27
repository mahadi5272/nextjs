'use client'
import useAuth from "@/Hook/useAuth";
import { useRouter } from "next/navigation";
import React from "react";


const Page = () => {
  const router = useRouter()
  const { SignIn } = useAuth();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    SignIn(email,password)
    .then(res=>{
      console.log(res.user);
      router.push('/')
      
    })
    .catch(error =>{
      console.log(error);
      
    });
    

  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <form onSubmit={handleSignIn}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Page;
