"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle } from '@/app/firebase/auth';
import { auth } from '@/app/firebase/firebase';

type Props = {
    isRegister: boolean,
}

const SignInPage = (props: Props) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessaage, setErrorMessaage] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      const user = await props.isRegister ? doCreateUserWithEmailAndPassword(email, password) : doSignInWithEmailAndPassword(email, password);
      console.log(user);
    }
    if (auth.currentUser != null) {
      router.replace('/dashboard');
    }
  }

  const onGoogleSignIn = (e: any) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(error => {
        setIsSigningIn(false)
      });
    }
    if (auth.currentUser != null) {
      router.replace('/dashboard');
    }
  }

  useEffect(() => {
    if (auth.currentUser != null) {
      router.replace('/dashboard');
    }
  });

  return (
   <div>
  
     <div className='w-full  flex justify-center items-center'>
        <div className='flex flex-col p-4 bg-white rounded-2xl py-8 px-16 my-16'>
            <div className='flex flex-col items-center mb-6'>
              <img
              src='/realmlogo.svg'
              height={50}
              width={50} className='mb-16 mt-4'
              />
              <h1 className='font-bold text-3xl mx-8'>
                  {props.isRegister ? 'Get started' : 'Welcome back!'}
              </h1>
              <h3 className='text-xs font-bold text-gray-600'>
              Please enter your details
              </h3>
            </div>
            <input
            value={email}
            onChange={(e) => {setEmail(e.target.value)} }
            type='text'
            placeholder='Email'
            className='text-black font-bold py-2 border-b-2 border-gray-600 mb-4 focus:outline-none'
            />
            <input
            value={password}
            onChange={(e) => {setPassword(e.target.value)} }
            type='password'
            placeholder='Password'
            className='text-black font-bold py-2 border-b-2 border-gray-600 focus:outline-none'
            />
            <button
            onClick={(e) => {onSubmit(e)}}
              className='text-white font-bold px-6 py-3 mt-8
              bg-black rounded-full'
              >
              {props.isRegister ? 'Sign Up' : 'Login'}
              </button>
              <button
              onClick={(e) => {onGoogleSignIn(e)}}
              className='text-black font-bold px-6 py-3 mt-3
              bg-gray-200 rounded-full flex flex-row items-center justify-center gap-2' 
              >
                <img
                src='/google.svg'
                height={20}
                width={20}
                />
              Continue with Google
              </button>
              <div className='text-sm mt-36 flex justify-center'>
                {props.isRegister ? 'Already have an account?' : 'Don\'t have an account?'}
                <a href={props.isRegister ? '/login' : '/register'} className='text-black font-black'>&nbsp;{props.isRegister ? 'Log in' : 'Sign up'}</a>
              </div>
        </div>
    </div>
   </div>
  )
}

export default SignInPage