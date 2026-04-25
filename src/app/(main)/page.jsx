import { redirect } from "next/navigation";

const defoult_catagories_id = "01";

const HomePage = async () => {
  redirect(`/catagorie/${defoult_catagories_id}`);
};

export default HomePage;
