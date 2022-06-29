import Link from "next/link";

export const LinkBtn = ({ text, href }) => (
  <Link href={href}>
    <a className="font-bold text-center w-1/2 py-3 border-r border-gray-700">
      {text}
    </a>
  </Link>
);

const Pagination = (props) => {
  return (
    <div className="flex bg-gray-800 text-gray-200 justify-between">
      <LinkBtn
        text="Previous"
        href={{
          pathname: "",
          query: { ...props.query, page: props.previousPage },
        }}
      />
      <LinkBtn
        href={{
          pathname: "",
          query: { ...props.query, page: props.nextPage },
        }}
        text="Next"
      />
    </div>
  );
};

export default Pagination;
