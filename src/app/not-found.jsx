import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-2">
      <p className="text-2xl font-bold">404</p>
      <h2 className="text-4xl font-bold">Not found page </h2>
      <Link href={"/"}>
        <button className="btn btn-primary">Back to haome</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
