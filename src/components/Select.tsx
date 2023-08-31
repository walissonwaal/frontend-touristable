interface SelectProps {
  default: string
  option_1: string
  option_2: string
}

const Select = (props: SelectProps) => {
  return (
    <select className="select w-full bg-primaryWhite dark:bg-zinc-700 dark:border-zinc-600 border">
      <option disabled selected>
        {props.default}
      </option>
      <option>{props.option_1}</option>
      <option>{props.option_2}</option>
    </select>
  );
};

export default Select;
