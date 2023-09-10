"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/root-reducer";

export default function PageRegisterUser() {
  const { currentUser } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    // Verifique se o usuário está autenticado
    if (currentUser) {
      // Se estiver autenticado, redirecione para a página do feed
      router.push('/users/feed');
    }
  }, [currentUser]);

  const router = useRouter();

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center gap-10">
      <h1 className='text-2xl'>Tourist<span className='font-thin'>Table</span></h1>
      <form className="w-full flex flex-col gap-5" action="" method="post">
        <div className="flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Qual o seu nome?" />
          <Input
            type="email"
            name="email"
            placeholder="E o seu melhor e-mail?"
          />
          <Input type="password" name="password" placeholder="Crie uma senha" />
          <Input
            type="password"
            name="password"
            placeholder="Repete a senha, por favor?"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button>Finalizar cadastro</Button>
        </div>
        <span className='text-sm'>Acessar minha conta</span>
      </form>
      </div>
    </div>
  );
}
