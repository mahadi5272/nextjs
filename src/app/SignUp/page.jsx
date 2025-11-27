'use client';   // Next.js এ client hook ব্যবহার করতে হলে বাধ্যতামূলক

import useAuth from "@/Hook/useAuth";
import React from "react";

export default function Page() {   // Component নাম বড় অক্ষরে
  const { SignUp } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email:", email, "Password:", password);

    SignUp(email, password)
      .then((res) => console.log("User:", res.user))
      .catch((err) => console.log("Error:", err));
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
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
