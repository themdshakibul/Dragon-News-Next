import Link from "next/link";

const Leftsidebar = ({ Catagories, activeId }) => {
  return (
    <section>
      <div>
        <ul className="flex flex-col gap-5 mt-5">
          {Catagories.news_category.map((Catagorie) => (
            <li
              key={Catagorie.category_id}
              className={` ${activeId === Catagorie.category_id && "bg-purple-500 text-white"} text-lg font-bold text-center p-2 rounded-lg`}
            >
              <Link
                href={`/catagorie/${Catagorie.category_id}`}
                className="block p2"
              >
                {Catagorie.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Leftsidebar;
