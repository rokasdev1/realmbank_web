"use client";

import React, { useEffect } from 'react'
import { doSignOut } from '../firebase/auth';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/navigation';


const Dashboard = () => {
    // const { currentUser } = useAuth();
    const router = useRouter();

  useEffect(() => {
    if (auth.currentUser == null) {
      router.replace('/login');
    }
  })
  return (
    <div>
      <div>
        <h1>{auth.currentUser?.email}</h1>
        <button
        onClick={() => {
          doSignOut();
          router.replace('/login');
        }}
        >
          Log out
        </button>
      </div>
    </div>
  )
}

export default Dashboard