"use client";
import Badge from "./Badge";
import Card from "./Card";
import Input from "./Input";
import Select from "./Select";
import { useState } from "react";

const Feed = () => {
  const [BadgeClicked, setBadgeClicked] = useState<boolean>(false);

  function eventOnClick() {
    setBadgeClicked(!BadgeClicked);
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-lg py-6">Cidade de destino</span>
        <Input type="text" placeholder='Ex: João Pessoa' />
        <span className="font-bold text-lg py-6">Tipo de local</span>
        <Select
          default="Escolha uma opção"
          option_1="Gastronomia e Bar"
          option_2="Passeios"
        />
        <div className="w-full py-6 flex flex-wrap gap-5">
          <Badge onClick={eventOnClick} text="Praia" />
          <Badge onClick={eventOnClick} text="Park" />
          <Badge onClick={eventOnClick} text="Museu" />
          <Badge onClick={eventOnClick} text="Shopping" />
          <Badge onClick={eventOnClick} text="Quiosque" />
        </div>
      </div>
      <div>
        <span className="font-bold text-lg">Escolha um destino 🤩</span>
      </div>
      <div className="my-6 flex flex-col gap-5">
        <Card
          name="Passeio de lancha"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          image="/img/praia.jpg"
          rating='Muito bom'
          media={4.2}
        />
      </div>
    </>
  );
};

export default Feed;
