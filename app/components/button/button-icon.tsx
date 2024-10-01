interface Props {
  onClick: () => void;
  icon: React.ReactElement | string;
  className?: string;
}
const IconButton = ({ onClick, icon: Icon, className }: Props) => {
  return (
    <button className={`text-2xl font-bold p-2 ${className}`} onClick={onClick}>
      {Icon}
    </button>
  );
};

export default IconButton;
