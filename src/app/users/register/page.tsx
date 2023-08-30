"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from 'react';

export default function PageRegisterUser() {
  const [notNull, setNotNull] = useState(false)

  return (
    <div className="mt-40 w-full flex items-center justify-center">
      <form className="w-full flex flex-col gap-5" action="" method="post">
        <div>
          <Input type="text" name="name" placeholder="Qual o seu nome?" />
        </div>
        <div className='flex flex-col gap-2'>
        {notNull ? <Button enable>Avançar</Button>:<Button disable>Avançar</Button>}
        </div>
      </form>
    </div>
  );
}