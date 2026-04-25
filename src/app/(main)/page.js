async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const Catagories = await getCatagories();
  console.log(Catagories.news_category);

  return (
    <section>
      <div className="grid grid-cols-12 gap-4 py-10">
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-center">All Catagories</h2>
          <ul className="flex flex-col gap-5 mt-5">
            {Catagories.news_category.map((Catagorie) => (
              <li
                key={Catagorie.id}
                className="text-lg font-bold bg-slate-200 text-center p-2 rounded-lg"
              >
                {Catagorie.category_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6">
          <h2 className="text-2xl font-semibold bg-yellow-500 text-center">
            All News
          </h2>
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold bg-green-500 text-center">
            All Catagories
          </h2>
        </div>
      </div>
    </section>
  );
}
