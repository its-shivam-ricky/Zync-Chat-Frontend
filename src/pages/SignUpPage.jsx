import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // This is how we did it at first, without using our custom hook
  // const queryClient = useQueryClient();
  // const {
  //   mutate: signupMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  // This is how we did it using our custom hook - optimized version
  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="flex items-center justify-center h-screen p-4 sm:p-6 md:p-8"
      data-theme="light"//theme color 
    >
      <div className="flex flex-col w-full max-w-5xl mx-auto overflow-hidden border shadow-xl/30 border-primary/25 lg:flex-row bg-base-100 rounded-xl">
        {/* SIGNUP FORM - LEFT SIDE */}
        <div className="flex flex-col w-full p-4 lg:w-1/2 sm:p-8">
          {/* LOGO */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="size-13 stroke-3 text-primary" />
            <span className="font-mono text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
             Zync
            </span>
          </div>

          {/* ERROR MESSAGE IF ANY */}
          {error && (
            <div className="mb-4 alert alert-error">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Create an Account</h2>
                  <p className="text-xs opacity-70">
                   Join Zync I promise I’m better than your last download 😉.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* FULLNAME */}
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full input input-bordered rounded-xl"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  {/* EMAIL */}
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@gmail.com"
                      className="w-full input input-bordered rounded-xl"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>
                  {/* PASSWORD */}
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="********"
                      className="w-full input input-bordered rounded-xl"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                    <p className="mt-1 text-xs opacity-70">
                      Password must be at least 6 characters long
                    </p>
                  </div>

                  <div className="form-control">
                    <label className="justify-start gap-2 cursor-pointer label">
                      <input type="checkbox" className="checkbox checkbox-sm" required />
                      <span className="text-xs leading-tight">
                        I agree to the{" "}
                        <span className="text-primary hover:underline">terms of service</span> and{" "}
                        <span className="text-primary hover:underline">privacy policy</span>
                      </span>
                    </label>
                  </div>
                </div>

                <button className="w-full btn btn-primary rounded-xl" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="mt-4 text-center">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
        <div className="items-center justify-center hidden w-full lg:flex lg:w-1/2 bg-primary/10">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative max-w-sm mx-auto aspect-square">
              <img src="/Forms-amico.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="mt-6 space-y-3 text-center">
              <h2 className="text-sm font-semibold">Connect with the people you love❤️</h2>
              <p className=" text-xs opacity-70">
               Zync: Because your words deserve a better platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;