"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const Signupgpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSignupFunc = (data) => {
    console.log(data, "data");

    const { name, photo, email, password } = data;
    console.log(name, photo);
  };

  return (
    <section>
      <div className="container mx-auto  flex items-center justify-center h-[80vh] ">
        <div className="p-10 rounded-lg bg-slate-100">
          <h2 className="text-2xl font-semibold mb-6">Loging your accoutn</h2>
          <form className="space-y-3" onSubmit={handleSubmit(handelSignupFunc)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
                {...register("name", { required: "Name field is required" })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo URL</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your photo url"
                {...register("photo", {
                  required: "Photo Url field is required",
                })}
              />
              {errors.photo && (
                <p className="text-red-500">{errors.photo.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                {...register("email", { required: "Email field is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                {...register("password", {
                  required: "password field is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <button className="btn bg-black w-full text-white mb-5">
              Logint
            </button>
            <p>
              Dont have an accoutn?{" "}
              <Link href={"/regester"} className="text-red-500">
                Regester
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signupgpage;
