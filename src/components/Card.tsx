// import Carousel from "./Carousel";
import Rate from "./Rate";

interface CardProps {
  name: string
  description: string
  image: string
  rating: string
  media: number
}

export default function Card(props: CardProps) {
  return (
    <div className="card w-full dark:bg-zinc-900 shadow-xl">
      <figure className="h-48">
        <img src={props.image} alt={props.name} />
        {/* <Carousel /> */}
      </figure>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="card-title select-none">{props.name}</h2>
        <p className="text-sm select-none">
          {props.description}
        </p>
        <Rate rating={props.rating} media={props.media} />
      </div>
    </div>
  );
}
