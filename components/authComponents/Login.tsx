"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/store/authSlice';
import { AppDispatch, RootState } from '@/store/index';

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(loginUser({ email, password }));
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-bold">Login</h2>
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
                onClick={handleLogin} 
                disabled={status === 'loading'}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                {status === 'loading' ? 'Logging in...' : 'Login'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Login;
