import Rate from "./Rate";

interface CardProps {
  name: string
  description: string
}

export default function Card(props: CardProps) {
  return (
    <div className="card w-full dark:bg-zinc-900 shadow-xl">
      <figure className="h-48">
        <img src="/img/praia.jpg" alt="Praia" />
      </figure>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="card-title">{props.name}</h2>
        <p className="text-sm">
          {props.description}
        </p>
        <Rate rating='Ótimo' media={4.5} />
      </div>
    </div>
  );
}
