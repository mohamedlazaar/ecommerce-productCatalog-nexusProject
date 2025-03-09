"use client";
import Login from '@/components/authComponents/Login';
import Signup from '@/components/authComponents/Signup';
import Profile from '@/components/authComponents/Profile';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function AuthPage() {
    const { user, error } = useSelector((state: RootState) => state.auth); 
    const [signUp, setSignUp] = useState(false);
    
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            {user ? (
                <Profile />
            ) : (
                <>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    
                    {signUp ? (
                        <>
                            <Signup />
                            <button 
                                onClick={() => setSignUp(false)}
                                className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                            >
                                Back to Login
                            </button>
                        </>
                    ) : (
                        <>
                            <Login />
                            <button 
                                onClick={() => setSignUp(true)}
                                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </>
            )}
        </main>
    );
}
