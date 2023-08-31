interface InputProps {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="input input-bordered dark:text-primaryWhite bg-primaryWhite dark:bg-zinc-700 dark:border-zinc-600 w-full"
    />
  );
}
