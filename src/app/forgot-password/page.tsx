
"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    console.log("Password reset link sent to:", email);
    setMessage("A password reset link has been sent to your email.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-3xl border border-blue-300 shadow-sm">
       
        <div className="flex items-center justify-start">
          <Link href="/login" className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        </div>

        
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Forgot Password?
        </h2>

       
        <p className="text-center text-gray-500 text-sm">
          Don’t worry! Enter your email and we’ll send you reset instructions.
        </p>

        {message && (
          <p className="text-center text-green-500 text-sm">{message}</p>
        )}

   
        <form className="space-y-6" onSubmit={handleReset}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email id"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-500 text-white font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
