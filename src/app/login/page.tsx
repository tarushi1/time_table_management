
"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (email === "teacher@example.com" && password === "password123") {
      router.push("/dashboard/classes");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border-2 border-blue-400 rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Welcome back!
        </h2>
        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
        )}
        <form className="space-y-4" onSubmit={handleLogin}>
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 font-normal focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 font-normal focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
            />
          </div>
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Forgot password?
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
