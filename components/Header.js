import Logo from "./Logo";
import HeaderBtn from "./HeaderBtn";
import {HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon} from "@heroicons/react/outline";

const Header = (props) => {
  return (
    <header className="p-4 sm:px-8 bg-stone-700 text-white w-full flex justify-between items-center">
      <div className="flex space-x-4">
        <HeaderBtn text="Home" Icon={HomeIcon} action={() => console.log("hey")} />
        <HeaderBtn text="Account" Icon={UserIcon} action={() => console.log("heyy")} />
        <HeaderBtn text="Contact" Icon={PhoneIcon} action={() => console.log("heyyy")} />
        <HeaderBtn text="About" Icon={InformationCircleIcon} action={() => console.log("heyyyy")} />
      </div>
      <Logo width={80} />
    </header>
  );
};
export default Header;
