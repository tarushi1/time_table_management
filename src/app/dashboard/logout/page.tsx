"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    
    console.log("Logged out");
    router.push("/login"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
      <Image
        src="/logout-illustration.webp"
        alt="Logout"
        width={200}
        height={200}
      />
      <p className="text-lg text-gray-700">
        Are you sure you want to log out?
      </p>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Log out
      </button>
    </div>
  );
}
