interface BadgeProps {
  text: string
}
const Badge = (props: BadgeProps) => {
  
  return (
    <div className={`badge border-zinc-800 dark:badge-outline gap-2 text-black dark:text-white`}>
      {props.text}
    </div>
  );
};

export default Badge;
