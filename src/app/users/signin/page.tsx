"use client";
import Input from "@/components/Input";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import userActionTypes from "@/redux/user/action-types";

export default function PageSignInUser() {
  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer);

  useEffect(() => {
    // Verifique se o usuário está autenticado
    if (currentUser) {
      // Se estiver autenticado, redirecione para a página do feed
      router.push('/users/feed');
    }
  }, [currentUser]);

  const router = useRouter();
  const dispatch = useDispatch();

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
      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Armazene o token no Local Storage
        localStorage.setItem("accessToken", token);

        const userResponse = await fetch(`http://localhost:3001/user/${email}`);

      if (!userResponse.ok) {
        throw new Error("Erro ao buscar usuário");
      }

      const userData = await userResponse.json();
        
      dispatch({
        type: userActionTypes.LOGIN,
        payload: {
          name: `${userData.first_name} ${userData.last_name}`,
          location: userData.points || 'Bem vindo(a) de volta 🙂',
          image: "/img/user.png",
          accessToken: token
        },
      });
        
        router.push("/users/feed");
        setIsLoading(false);

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
      <div className="w-full flex flex-col items-center gap-20">
        <h1 className="text-2xl">
          Tourist<span className="font-thin">Table</span>
        </h1>
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
