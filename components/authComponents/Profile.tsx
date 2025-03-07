"use client";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/index';
import { logout } from '@/store/authSlice';

const Profile = () => {
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    if (!isAuthenticated) {
        return <p>Please log in or sign up!</p>;
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold">Welcome, {user?.username}!</h2>
            <p>Email: {user?.email}</p>
            <button 
                onClick={() => dispatch(logout())} 
                className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                Logout
            </button>
        </div>
    );
};

export default Profile;
