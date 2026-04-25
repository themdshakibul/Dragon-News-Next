import { FaGithub, FaGoogle } from "react-icons/fa";

const Rightsidebar = () => {
  return (
    <section>
      <div className="flex flex-col gap-3 mt-5">
        <button className="btn border-2 border-blue-500 text-blue-500">
          <FaGoogle /> Loging width Google
        </button>
        <button className="btn border-2">
          <FaGithub /> Loging width Github
        </button>
      </div>
    </section>
  );
};

export default Rightsidebar;
