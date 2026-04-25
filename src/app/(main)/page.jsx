import Leftsidebar from "@/Components/Homepage/News/Leftsidebar";
import Rightsidebar from "@/Components/Homepage/News/Rightsidebar";

async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const Catagories = await getCatagories();

  return (
    <section>
      <div className="grid grid-cols-12 gap-4 py-10">
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-center">All Catagories</h2>
          <Leftsidebar Catagories={Catagories} activeId={null} />
        </div>
        <div className="col-span-6">
          <h2 className="text-2xl font-semibold bg-yellow-500 text-center">
            All News
          </h2>
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-center">Loging Width</h2>
          <Rightsidebar />
        </div>
      </div>
    </section>
  );
}
