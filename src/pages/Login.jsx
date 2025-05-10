import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth() || {};
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("Login Sucessfully");
      loginUser(data);
      navigate("/dashboard");
    },
    onError: () => toast.error("Login failed"),
  });
  const onSubmit = (data) => {
    mutation.mutate({ username: data.username, password: data.password });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[400px] mx-auto bg-white rounded-xl shadow-md 
      overflow-hidden p-8 space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
        Welcome Back
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-purple-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            placeholder="Enter your username"
            {...register("username", { required: true })}
            className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500 animate-pulse">
              Username is required
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-purple-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password", { required: true })}
            className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500 animate-pulse">
              Password is required
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={mutation.isLoading}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {mutation.isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
