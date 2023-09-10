interface BadgeProps {
  text: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}
const Badge = (props: BadgeProps) => {
  
  return (
    <div onClick={props.onClick} className={`badge border-zinc-800 dark:badge-outline gap-2 text-black dark:text-white`}>
      {props.text}
    </div>
  );
};

export default Badge;
