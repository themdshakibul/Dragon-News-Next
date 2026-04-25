import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
  return (
    <section>
      <div>
        <div className="card bg-base-100 shadow-sm">
          {/* author info */}
          <div className="flex items-center justify-between bg-base-300 p-2 rounded-lg">
            <div className="flex items-center gap-3">
              <Image
                src={news.author?.img}
                alt={"iamge"}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <CiBookmark />
              <CiShare2 />
            </div>
          </div>

          {/* title and image  */}
          <div className="card-body">
            <h2 className="card-title">{news.title}</h2>
            <figure>
              <Image
                src={news.image_url}
                alt={news.author?.name}
                width={300}
                height={300}
                className="rounded-lg w-full"
              />
            </figure>
            <div className="mt-3">
              <p className="font-semibold line-clamp-3">{news.details}</p>
            </div>
            {/* rating and view section */}
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">⭐⭐⭐{news.rating?.number}</h2>
              <h2 className="font-semibold">View: {news.total_view}</h2>
            </div>
            <Link href={`/news/${news._id}`}>
              <button className="text-orange-500 font-bold cursor-pointer">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
