import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      // Clear inputs after successful request
      if (response.ok) {
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Login
        </h1>

        <p className="mb-6 text-gray-500">
          Welcome back! Please login to your account.
        </p>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-16 outline-none focus:border-blue-500"
          />

          <Button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;