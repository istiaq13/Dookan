"use client";

import { Button } from "@heroui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";


export default function Page() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);
  
    return (
        <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
          <section className="flex flex-col gap-3">
            <div className="flex justify-center">
                <img className="h-12 mb-8" src="/logo.png" alt="Logo"/>
            </div>
            <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[400px] w-full">
                <h1 className="font-bold text-xl">Login with email</h1>
              <form className="flex flex-col gap-3">
                <input
                    placeholder="Enter Your Email"
                    id="user-email"
                    name="user-email"
                    className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                    type="email"
                />
                <input
                    placeholder="Enter Your Password"
                    id="user-password"
                    name="user-password"
                    className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                    type="password"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                    Login
                </button>
              </form>
              <div className="flex justify-between">
                <Link href={`/signup`} className="font-semibold text-sm text-blue-700 no-underline">
                  New? Create Account
                </Link>
                <Link href={`/forget-pass`} className="font-semibold text-sm text-blue-700 no-underline">
                  Forget Password?
                </Link>
              </div>
              <hr />
              <SignInWithGoogleComponent />
            </div>   
          </section>    
        </main>
    );
}    

function SignInWithGoogleComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
};
  return (
    <Button 
      isLoading={isLoading}
      disabled={isLoading}
      className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors duration-200 font-medium"
      onClick={handleLogin}
    >
      Sign in with Google
    </Button>
  );
}