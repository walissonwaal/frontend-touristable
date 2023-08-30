
interface InputProps {
  type: string
  name?: string
  id?: string
  placeholder?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return (
    <input 
      className="w-full px-2 py-2 rounded-md outline-none bg-primaryWhite dark:bg-zinc-700 dark:border-zinc-600 border focus:border-zinc-300" 
      type={props.type} 
      name={props.name} 
      id={props.id} 
      placeholder={props.placeholder} 
      value={props.value}
      onChange={props.onChange}
    />
  );
}