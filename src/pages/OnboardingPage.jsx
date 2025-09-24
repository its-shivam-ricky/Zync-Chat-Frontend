// import { useState } from "react";
// import useAuthUser from "../hooks/useAuthUser";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { completeOnboarding } from "../lib/api";
// import { LoaderIcon, LocateFixed, ShuffleIcon, CameraIcon,UserRoundCheck } from "lucide-react";
// import { LANGUAGES } from "../constants";
// import {GENDER} from "../constants";

// const OnboardingPage = () => {
//   const { authUser } = useAuthUser();
//   const queryClient = useQueryClient();

//   const [formState, setFormState] = useState({
//     fullName: authUser?.fullName || "",
//     bio: authUser?.bio || "",
//     nativeLanguage: authUser?.nativeLanguage || "",
//     learningLanguage: authUser?.learningLanguage || "",
//     location: authUser?.location || "",
//     profilePic: authUser?.profilePic || "",
//   });

//   const { mutate: onboardingMutation, isPending } = useMutation({
//     mutationFn: completeOnboarding,
//     onSuccess: () => {
//       toast.success("Profile onboarded successfully");
//       queryClient.invalidateQueries({ queryKey: ["authUser"] });
//     },

//     onError: (error) => {
//       toast.error(error.response.data.message);
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     onboardingMutation(formState);
//   };

//   const handleRandomAvatar = () => {
//     const idx = Math.floor(Math.random() * 100) + 1; // 1-100 included
//     const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

//     setFormState({ ...formState, profilePic: randomAvatar });
//     toast.success("Random profile picture generated!");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-4 bg-base-100" data-theme="light">
//       <div className="w-full max-w-3xl shadow-xl/30 card bg-base-100 border-primary/25 ">
//         <div className="p-6 card-body sm:p-8">
//           <h1 className="mb-6 text-2xl font-bold text-center sm:text-3xl">Complete Your Profile</h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* PROFILE PIC CONTAINER */}
//             <div className="flex flex-col items-center justify-center space-y-4">
//               {/* IMAGE PREVIEW */}
//               <div className="overflow-hidden rounded-full size-32 bg-base-300">
//                 {formState.profilePic ? (
//                   <img
//                     src={formState.profilePic}
//                     alt="Profile Preview"
//                     className="object-cover w-full h-full"
//                   />
//                 ) : (
//                   <div className="flex items-center justify-center h-full">
//                     <CameraIcon className="size-12 text-base-content opacity-40 " />
//                   </div>
//                 )}
//               </div>

//               {/* Generate Random Avatar BTN */}
//               <div className="flex items-center gap-2">
//                 <button type="button" onClick={handleRandomAvatar} className="btn btn-accent">
//                   <ShuffleIcon className="mr-2 size-4" />
//                   Generate Random Avatar
//                 </button>
//               </div>
//             </div>

//             {/* FULL NAME */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text m-2">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formState.fullName}
//                 onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
//                 className="w-full input input-bordered rounded-xl  "
//                 placeholder="Your full name "
//               />
//             </div>

//             {/* BIO */}
//             <div className="form-control ">
//               <label className="label">
//                 <span className="label-text m-2 ">Bio</span>
//               </label>
//               <textarea
//                 name="bio"
//                 value={formState.bio}
//                 onChange={(e) => setFormState({ ...formState, bio: e.target.value })}
//                 className="h-24 w-full textarea textarea-bordered ml-2 rounded-xl"
//                 placeholder="Tell others about yourself ..."
//               />
//             </div>

//             {/* LANGUAGES */}
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               {/* NATIVE LANGUAGE */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text m-2"> Language</span>
//                 </label>
//                 <select
//                   name="nativeLanguage"
//                   value={formState.nativeLanguage}
//                   onChange={(e) => setFormState({ ...formState, nativeLanguage: e.target.value })}
//                   className="w-full select select-bordered"
//                 >
//                   <option value="">Country language</option>
//                   {LANGUAGES.map((lang) => (
//                     <option key={`native-${lang}`} value={lang.toLowerCase()}>
//                       {lang}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* LEARNING LANGUAGE */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text m-2">Gender</span>
//                 </label>
//                 <select
//                   name="Language"
//                   value={formState.learningLanguage}
//                   onChange={(e) => setFormState({ ...formState, learningLanguage: e.target.value })}
//                   className="w-full select select-bordered"
//                 >
//                   <option value="">Gender</option>
//                   {GENDER.map((lang) => (
//                     <option key={`learning-${lang}`} value={lang.toLowerCase()}>
//                       {lang}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* LOCATION */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text m-2">Location</span>
//               </label>
//               <div className="relative">
//                 <LocateFixed className="absolute transform-translate-y-1/2 top-1/2 left-3 size-5 text-base-content opacity-70" />
//                 <input
//                   type="text"
//                   name="location"
//                   value={formState.location}
//                   onChange={(e) => setFormState({ ...formState, location: e.target.value })}
//                   className="w-full pl-10 input input-bordered"
//                   placeholder="City, Country"
//                 />
//               </div>
//             </div>

//             {/* SUBMIT BUTTON */}

//             <button className="w-full btn btn-primary" disabled={isPending} type="submit">
//               {!isPending ? (
//                 <>
//                   <UserRoundCheck className="mr-2 size-5" />
//                   Complete Onboarding
//                 </>
//               ) : (
//                 <>
//                   <LoaderIcon className="mr-2 animate-spin size-5" />
//                   Onboarding...
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default OnboardingPage;



import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeOnboarding } from "../lib/api";
import { LoaderIcon, MapPinIcon, MessageSquare, ShuffleIcon, CameraIcon } from "lucide-react";
import { LANGUAGES } from "../constants";
import { GENDER } from "../constants";

const OnboardingPage = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile onboarded successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;
    setFormState({ ...formState, profilePic: randomAvatar });
    toast.success("Random profile picture generated!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-base-100" data-theme="light">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/login.mp4" type="video/mp4" />
        {/* Optionally add a fallback image */}
      </video>
      <div className="w-full max-w-xl rounded-3xl shadow-2xl bg-transparent-100 backdrop-blur-md border border-base-300">
        <div className="p-8">
          <h1 className="mb-8 text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-tight">
            Complete Your Profile
          </h1>
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* PROFILE PIC CONTAINER */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="relative">
                <div className="overflow-hidden rounded-full size-32 bg-base-300 border-4 border-primary/20 shadow-lg">
                  {formState.profilePic ? (
                    <img
                      src={formState.profilePic}
                      alt="Profile Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <CameraIcon className="size-12 text-base-content opacity-40" />
                    </div>
                  )}
                </div>
                {/* Floating Camera Icon Upload Button */}
                <label className="absolute bottom-2 right-2 btn btn-circle btn-primary btn-xs shadow-lg cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          setFormState({ ...formState, profilePic: ev.target.result });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <CameraIcon className="size-4" />
                </label>
              </div>
              <button
                type="button"
                onClick={handleRandomAvatar}
                className="btn btn-accent btn-xs mt-2"
              >
                <ShuffleIcon className="mr-2 size-4" />
                Random Avatar
              </button>
            </div>

            {/* FULL NAME */}
            <div>
              <label className="label mb-1">
                <span className="label-text font-semibold text-white">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                className="w-full input input-bordered input-lg rounded-xl"
                placeholder="Your full name"
                required
              />
            </div>

            {/* BIO */}
            <div>
              <label className="label mb-1">
                <span className="label-text font-semibold text-white">Bio</span>
              </label>
              <textarea
                name="bio"
                value={formState.bio}
                onChange={(e) => setFormState({ ...formState, bio: e.target.value })}
                className="w-full textarea textarea-bordered rounded-xl"
                placeholder="Tell others about yourself and your language learning goals"
                rows={3}
              />
            </div>

            {/* LANGUAGES */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* NATIVE LANGUAGE */}
              <div>
                <label className="label mb-1">
                  <span className="label-text font-semibold text-white">Language</span>
                </label>
                <select
                  name="nativeLanguage"
                  value={formState.nativeLanguage}
                  onChange={(e) => setFormState({ ...formState, nativeLanguage: e.target.value })}
                  className="w-full select select-bordered rounded-xl"
                  required
                >
                  <option value=""> language</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`native-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* LEARNING LANGUAGE */}
              <div>
                <label className="label mb-1">
                  <span className="label-text font-semibold text-white">Country</span>
                </label>
                <select
                  name="learningLanguage"
                  value={formState.learningLanguage}
                  onChange={(e) => setFormState({ ...formState, learningLanguage: e.target.value })}
                  className="w-full select select-bordered rounded-xl"
                  required
                >
                  <option value="">Country</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`country-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* GENDER */}
            <div>
              <label className="label mb-1">
                <span className="label-text font-semibold text-white">Gender</span>
              </label>
              <select
                name="gender"
                value={formState.gender || ""}
                onChange={(e) => setFormState({ ...formState, gender: e.target.value })}
                className="w-full select select-bordered rounded-xl"
                required
              >
                <option value="">Select your gender</option>
                {GENDER.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* LOCATION */}
            <div>
              <label className="label mb-1">
                <span className="label-text font-semibold text-white ">Address</span>
              </label>
              <div className="relative">
                <MapPinIcon className="absolute transform -translate-y-1/2 top-1/2 left-3 size-5 text-base-content opacity-70" />
                <input
                  type="text"
                  name="location"
                  value={formState.location}
                  onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                  className="w-full pl-10 input input-bordered rounded-xl"
                  placeholder="City, State, Country, postal code"
                  required
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button className="w-full btn btn-success btn-lg mt-2 rounded-xl" disabled={isPending} type="submit">
              {!isPending ? (
                <>
                  <MessageSquare className="mr-2 size-5" />
                  Complete Onboarding
                </>
              ) : (
                <>
                  <LoaderIcon className="mr-2 animate-spin size-5" />
                  Onboarding...
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;