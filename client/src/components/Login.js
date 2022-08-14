import { async } from "@firebase/util";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/create-campaign");
    } catch (error) {
      setError(error);
      console.log("error", error);
    }
  };
  return (
    <div className="max-w-[800px] min-w-[400px] p-5 absolute left-2/4 -translate-x-2/4 top-1/4 -translate-y-1/4 flex flex-col gap-2 border-[1px] border-orange-500 rounded-md">
      <h2 className="text-orange-500 text-lg font-nunito">
        Log in to your account.
      </h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-left gap-1"
        action=""
      >
        <label className="font-nunito text-orange-500" htmlFor="">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-[1px] border-orange-500 h-8 rounded-md pl-1"
          type="text"
          placeholder="example@example.com"
        />
        <label className="font-nunito text-orange-500" htmlFor="">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-[1px] border-orange-600 h-8 pl-1 rounded-md"
          type="password"
          placeholder="strong password"
        />
        <p className="font-nunito text-red-500">{error}</p>
        <button className="w-full h-8 font-nunito text-white bg-orange-500 rounded-md">
          Login
        </button>
      </form>
      <p className="text-orange-500 text-sm font-nunito self-center">
        Not yet signed up?{" "}
        <Link className="underline text-blue-600" to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
