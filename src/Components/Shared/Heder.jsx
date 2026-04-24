import Image from "next/image";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Heder = () => {
  return (
    <section>
      <div className="py-5 text-center space-y-4">
        <Image
          width={400}
          height={400}
          alt="Logo"
          src={logo}
          className="mx-auto"
        />
        <h2 className="text-xl font-semibold">
          Journalism Without Fear or Favour
        </h2>
        <p className="font-semibold">{format(new Date(), "EEEE, MMM, dd, yyyy")}</p>
      </div>
    </section>
  );
};

export default Heder;
