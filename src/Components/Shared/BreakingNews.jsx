import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Nreaking news: News policky Annoused by thee gaaraditee ",
  },
  {
    id: 2,
    title: "Nreaking news: News policky Annoused by thee gaaraditee ",
  },
  {
    id: 3,
    title: "Nreaking news: News policky Annoused by thee gaaraditee ",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex items-center justify-between gap-5 border bg-base-300 border-gray-300 py-4 px-3 rounded-lg">
      <button className="btn bg-red-500 text-white">News Letter</button>
      <Marquee pauseOnHover={true} speed={100}>
        {news.map((n) => (
          <span key={n.i} className="ml-10">
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
