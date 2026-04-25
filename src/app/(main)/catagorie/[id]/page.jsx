import Leftsidebar from "@/Components/Homepage/News/Leftsidebar";
import Rightsidebar from "@/Components/Homepage/News/Rightsidebar";
import { getCatagories, getNewsCatagoriesId } from "@/lib/data";

const NewsCatagoriePage = async ({ params }) => {
  const { id } = await params;

  const Catagories = await getCatagories();
  const NewsId = await getNewsCatagoriesId(id);

  return (
    <section>
      <div className="grid grid-cols-12 gap-4 py-10">
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-center">All Catagories</h2>
          <Leftsidebar Catagories={Catagories} activeId={id} />
        </div>
        <div className="col-span-6">
          <h2 className="text-2xl font-semibold text-center">All News</h2>
          {NewsId.length === 0 ? (
            <div className="flex items-center justify-center h-100">
              <h2 className="text-2xl font-semibold">No News Found!</h2>
            </div>
          ) : (
            <div className="space-y-5">
              {NewsId.map((news) => (
                <div key={news._id} className="border rounded-lg p-5">
                  <h2 className="text-xl font-semibold">{news.title}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-center">Loging Width</h2>
          <Rightsidebar />
        </div>
      </div>
    </section>
  );
};

export default NewsCatagoriePage;
