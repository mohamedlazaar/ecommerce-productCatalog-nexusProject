"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '@/store/authSlice';
import { AppDispatch, RootState } from '@/store/index';

const Signup = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSignup = () => {
        dispatch(signupUser({ email, password, username }));
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-bold">Signup</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <button 
                onClick={handleSignup} 
                disabled={status === 'loading'}
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                {status === 'loading' ? 'Signing up...' : 'Signup'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Signup;
