const ButtonClick = ({title, onclick}: {onclick:() => void, title:string}): JSX.Element => {
  return (
    <button onClick={onclick} className="font-quicksandSemibold text-purple-400">
        {title}
    </button>
  );
};

export default ButtonClick;
