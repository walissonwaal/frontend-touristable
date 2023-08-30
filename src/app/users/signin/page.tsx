"use client";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PageSignInUser() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3001/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(email, password);
      if (response.ok) {
        // Successful login logic
        setIsLoading(false);
        router.push("/users/feed");
      } else {
        setIsLoading(false);
        const errorData = await response.json();
        setLoginError(
          errorData.message ||
            "E-mail ou senha inválidos! Verifique suas credenciais."
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.error("An error occurred:", error);
      setLoginError("Servidor offline. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div className='hidden md:flex'>
          <Image className="py-16" src='/img/touristtable-logo.png' width={200} height={200} alt='TouristTable' />
        </div>
        <form
          className="w-full flex flex-col gap-5 max-w-sm"
          action=""
          method="post"
        >
          <div>
            <Input
              onChange={handleEmailChange}
              value={email}
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div>
            <Input
              onChange={handlePasswordChange}
              value={password}
              type="password"
              name="password"
              placeholder="Senha"
            />
          </div>

          <div className="flex flex-col gap-5">
            {/* Display login error message */}
            {loginError && <p className="text-red-400">{loginError}</p>}
            <Link href="#" className="text-red-400 text-xs underline">
              Esqueceu sua senha?
            </Link>
            <button type="button" onClick={handleLogin} className="button">
              {isLoading ? "Carregando..." : "Acessar"}
            </button>
            <div className="flex gap-1">
              <span className="text-xs">Não possui uma conta?</span>
              <Link
                href="/users/register"
                className="text-blue-500 text-xs font-bold"
              >
                Registre-se
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
