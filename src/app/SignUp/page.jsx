"use client"; // Next.js এ client hook ব্যবহার করতে হলে বাধ্যতামূলক

import useAuth from "@/Hook/useAuth";
import { updateProfile } from "firebase/auth";
import React from "react";

export default function Page() {
  // Component নাম বড় অক্ষরে
  const { SignUp, googleSignIn,setUser } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    console.log("Email:", email, "Password:", password);

    SignUp(email, password)
      .then((res) => {
        setUser(res.user)
        updateProfile(res.user,{photoURL})
        .then(()=>{
          setUser({...res.user,photoURL})
          alert('succese');
          
        })
        .catch((err)=>console.log(err)
        )
      })
      .catch((err) => console.log("Error:", err));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {})
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "Google Login failed!");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Account</h1>
          <p className="py-6">Sign up with your email and password</p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
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

              <button className="btn btn-neutral mt-4 w-full">Sign Up</button>
            </form>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
