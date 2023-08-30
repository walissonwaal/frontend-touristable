export default function Card() {
  return (
    <div className="card w-full dark:bg-zinc-900 shadow-xl">
        <figure className="h-48">
          <img src="/img/praia.jpg" alt="Shoes" />
        </figure>
        <div className="p-4 flex flex-col gap-2">
          <h2 className="card-title">Passeio de lancha</h2>
          <p className="text-sm">
            Faça um passeio de lancha pela praias de João Pessoa.
          </p>
          <div className="rating flex flex-col items-end">
            <div>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            </div>
            <p>4.5</p>
          </div>
        </div>
      </div>
  )
}