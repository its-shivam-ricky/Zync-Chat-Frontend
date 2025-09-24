import { useState } from "react";
//import { MessageSquareHeart } from "lucide-react";
import { MessageSquare } from 'lucide-react';
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // This is how we did it at first, without using our custom hook
  // const queryClient = useQueryClient();
  // const {
  //   mutate: loginMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: login,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  // This is how we did it using our custom hook - optimized version
  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
     
    <div className="flex items-center justify-center h-screen p-4 sm:p-6 md:p-8 "
       data-theme="light">  
      <div className="flex flex-col w-full max-w-5xl mx-auto overflow-hidden border shadow-xl/50 border-primary/25 lg:flex-row bg-white  rounded-xl">
        {/* LOGIN FORM SECTION */}
        <div className="flex flex-col w-full p-4 lg:w-1/2 sm:p-8">
          {/* LOGO */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="size-13 stroke-3 text-primary" />
            <span className="font-mono text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Zync
            </span>
          </div>

          {/* ERROR MESSAGE DISPLAY */}
          {error && (
            <div className="mb-4 alert alert-error">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl mt-4 font-semibold">Welcome Back</h2>
                  <p className="text-sm opacity-70">
                   Sign in to Zync and let the chat magic begin✨.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-full space-y-2 form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full input input-bordered rounded-xl"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="w-full space-y-2 form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full input input-bordered rounded-xl"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="w-full btn btn-primary rounded-xl" disabled={isPending}>
                    {isPending ? (
                      <>
                        <span className="loading loading-spinner loading-xs"></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  <div className="mt-4 text-center">
                    <p className="text-sm">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-primary hover:underline">
                        Create one
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="items-center justify-center hidden w-full lg:flex lg:w-1/2 bg-primary/10">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative max-w-sm mx-auto aspect-square">
              <img src="Gen Z-pana.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="mt-6 space-y-3 text-center">
              <h2 className="text-xl font-semibold">Connect with the people you love❤️</h2>
              <p className="opacity-70">
                 Zync: Because your words deserve a better platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};
export default LoginPage;