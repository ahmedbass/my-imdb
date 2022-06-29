import Image from "next/image";

const Logo = ({ width = 100, action }) => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
      alt="Logo"
      width={width}
      height={width / 2}
      objectFit="contain"
      className={`${action && "active:brightness-105  cursor-pointer"}`}
    />
  );
};
export default Logo;
