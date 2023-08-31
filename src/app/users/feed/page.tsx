import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Select from "@/components/Select";

export default function PageFeedUser() {
  return (
    <div className="h-full flex flex-col py-2">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-lg py-6">Tipo de local</span>
        <Select
          default="Escolha uma opção"
          option_1="Gastronomia e Bar"
          option_2="Passeios"
        />
        <div className="w-full py-6 flex flex-wrap gap-5">
          <Badge text="Praia" />
          <Badge text="Park" />
          <Badge text="Museu" />
          <Badge text="Shopping" />
          <Badge text="Quiosque" />
        </div>
      </div>
      <div>
        <span className="font-bold text-lg">Escolha um destino 🤩</span>
      </div>
      <div className="my-6 flex flex-col gap-5">
        <Card
          name="Passeio de lancha"
          description="Conheça o melhor passeio de lancha pela orla de João Pessoa."
        />
      </div>
    </div>
  );
}
