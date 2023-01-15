import React, { useEffect, useState, FC, ReactElement } from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

// const fetchLogin = async () => {
//   const data = await axios.get("http://");
// };
// useEffect(() => {}, []);
const Login: FC = (): ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitLogin = () => {
    console.log(email, password);

    fetch("/login", {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())

      .then((data) => {});
  };

  return (
    //nav
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <Nav />
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Log in
        </h1>
        <form className="mt-6">
          <div className="mb-2 email">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e): void => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2 password">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e): void => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forgot Password?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={(): void => submitLogin()}
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="http://localhost:8080/login/id" //singup location
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
      <Footer />
    </div>
    //footer
  );
};

export default Login;
