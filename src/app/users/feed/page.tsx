import Card from "@/components/Card";

export default function PageFeedUser() {
  return (
    <div className="h-full flex flex-col py-2">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-lg py-6">Tipo de local</span>
        <select className="select w-full bg-primaryWhite dark:bg-zinc-700 dark:border-zinc-600 border">
          <option disabled selected>
            Escolha uma opção
          </option>
          <option>Gastronomia</option>
          <option>Passeio</option>
        </select>
        <div className="w-full py-6 flex flex-wrap gap-5">
          <div className="badge badge-outline hover:bg-primaryGreen duration-300">
            Parque
          </div>
          <div className="badge badge-outline hover:bg-primaryGreen duration-300">
            default
          </div>
          <div className="badge border-zinc-800 dark:badge-outline bg-orange-400 dark:bg-secondaryGreen gap-2 text-white">
            Lancha
          </div>
          <div className="badge badge-outline hover:bg-primaryGreen duration-300">
            default
          </div>
          <div className="badge badge-outline hover:bg-primaryGreen duration-300">
            default
          </div>
          <div className="badge badge-outline hover:bg-primaryGreen duration-300">
            default
          </div>
          <div className="badge badge-outline hover:bg-primaryGreen duration-300">
            default
          </div>
          <div className="badge badge-outline hover:bg-primaryGreen duration-300">
            default
          </div>
        </div>
      </div>
      <div>
        <span className="font-bold text-lg">Escolha um destino 🤩</span>
      </div>
      <div className="my-6 flex flex-col gap-5">
        <Card />
      </div>
    </div>
  );
}
