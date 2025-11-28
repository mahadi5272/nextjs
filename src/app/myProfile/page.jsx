"use client";
import useAuth from "@/Hook/useAuth";
import React from "react";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      {user ? (
        <>
          <img
            className="mb-3 w-32 h-32 m-auto rounded-3xl object-cover"
            src={user?.photoURL || "/default.png"}
            alt="User Photo"
          />

          <h1 className="font-bold text-center">{user?.email}</h1>

          <button className="btn btn-neutral w-full mt-4">
            Update Profile
          </button>
        </>
      ) : (
        <p className="text-center text-gray-500">Please login first.</p>
      )}
    </div>
  );
};

export default MyProfile;
