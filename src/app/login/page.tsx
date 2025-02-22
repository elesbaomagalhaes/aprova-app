"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");
    
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Credenciais inválidas");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-4" />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-4" />
        <Button className="w-full mt-4" onClick={handleLogin}>
          Entrar
        </Button>
      </div>
    </div>
  );
}