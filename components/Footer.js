const Footer = (props) => {
  return (
      <footer className="p-4 border-t w-full text-center bg-amber-100">
        <p className="text-sm text-amber-600">
          Copyright &copy; {new Date().getFullYear()} Ahmed Bass
        </p>
      </footer>
  );
};
export default Footer;
