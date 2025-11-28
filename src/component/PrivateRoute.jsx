"use client";

import {useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/Hook/useAuth";


export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/SignIn");
    }
  }, [loading, user, router]);

  if (loading) return <p className="text-center py-10">Checking Auth...</p>;

  if (!user) return null;

  return <>{children}</>;
}
