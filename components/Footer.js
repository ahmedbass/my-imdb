const Footer = (props) => {
  return (
      <footer className="p-4 py-8 w-full text-center bg-gray-700">
        <p className="text-sm text-gray-200">
          Copyright &copy; {new Date().getFullYear()} Ahmed Bass
        </p>
      </footer>
  );
};
export default Footer;
