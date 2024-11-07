import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken());
        // Set emailSent to true after dispatching
        setEmailSent(true);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            {loading ? (
                <div>Loading....</div>
            ) : (
                <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold text-center mb-4">
                        {!emailSent ? "Reset Your Password" : "Check Your Email"}
                    </h1>
                    <p className="text-center mb-6 text-gray-400">
                        {!emailSent
                            ? "No worries! We'll send you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                            : `We have sent a password reset email to ${email}. Please check your inbox.`}
                    </p>

                    <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
                        {!emailSent && (
                            <label className="block">
                                <p className="text-sm mb-2 text-gray-300">Email Address</p>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full p-3 py-2 rounded-md bg-gray-700 text-richblack-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>
                        )}

                        <button
                            type="submit"
                            className="mt-4 w-full py-2 rounded-md bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 transition-colors"
                        >
                            {!emailSent ? "Reset Password" : "Resend Email"}
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <Link to="/login" className="text-blue-400 hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;