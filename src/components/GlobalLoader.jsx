"use client";

import { useAuth } from "@/context/AuthContext";
import Loader from "./Loader";

export default function GlobalLoader() {
  const { loading } = useAuth();
  
  if (!loading) return null;
  
  return <Loader />;
}
