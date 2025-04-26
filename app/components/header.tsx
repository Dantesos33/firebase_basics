'use client';

import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

const Header = () => {

  const [user, setUser] = useState<SetStateAction<any>>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);


  return (
    <>
   <header className="flex justify-between items-center p-4 bg-gray-800 text-white h-20">
    <h2 className="font-bold tracking-wider text-xl">Firebase Basics</h2>
    <nav>
      <ul className="flex gap-4 items-center text-white/75">
        <li className="text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
        {user ? (
          <li onClick={()=>{signOut(auth)}} className="cursor-pointer bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300 cursor-pointe">Logout</li>
        ) : (
          <Link href="/login"  className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300 cursor-pointer">Login</Link>
        )}
      </ul>
    </nav>
   </header>
   </>
  )
}

export default Header