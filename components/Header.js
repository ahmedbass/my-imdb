import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import {
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = (props) => {
  const headerButtons = [
    { text: "home", Icon: HomeIcon, action: () => console.log("hey") },
    { text: "account", Icon: UserIcon, action: () => console.log("heyy") },
    { text: "contact", Icon: PhoneIcon, action: () => console.log("heyyy") },
    {
      text: "about",
      Icon: InformationCircleIcon,
      action: () => console.log("heyyyy"),
    },
  ];
  return (
    <header
      className=" p-4 sm:px-8 md:px-16 bg-gray-700 text-white w-full flex flex-col sm:flex-row
     sm:justify-between items-center space-y-8 sm:space-y-0"
    >
      <div className="flex space-x-8">
        {headerButtons.map((btn) => (
          <HeaderButton
            key={btn.text}
            text={btn.text}
            Icon={btn.Icon}
            action={btn.action}
          />
        ))}
      </div>

      <div>
        <Logo width={80} />
      </div>
    </header>
  );
};
export default Header;
