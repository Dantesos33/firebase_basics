'use client'

import React, { SetStateAction } from 'react';
import { useState } from 'react';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { redirect } from 'next/navigation';

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in
    alert('Login Successful');
  }
  ).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  }
  );

  redirect('/');
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <div className="flex items-center justify-center" style={{ height: "calc(100vh - 80px)" }}>
   <div className='w-96 p-6 bg-white rounded-lg shadow-md'>
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" required className="pl-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" required className="pl-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
    </form>
   </div>
   </div>
    </>
  )
}

export default Login