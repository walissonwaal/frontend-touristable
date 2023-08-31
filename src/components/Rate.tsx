interface RateProps {
  rating: string
  media: number
}

const Rate = (props: RateProps) => {
  return (
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
            <p className='text-sm'>{`${props.rating} ${props.media}`}</p>
          </div>
  );
}

export default Rate;