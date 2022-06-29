import { ExclamationCircleIcon } from "@heroicons/react/outline";

const HeaderBtn = ({ text, Icon = ExclamationCircleIcon, action }) => {
  return (
    <div
      className="flex flex-col justify-center items-center space-y-1
       cursor-pointer hover:text-amber-400 transition"
      onClick={action}
    >
      <Icon className="h-6" />
      <p className="text-sm uppercase">{text}</p>
    </div>
  );
};
export default HeaderBtn;
