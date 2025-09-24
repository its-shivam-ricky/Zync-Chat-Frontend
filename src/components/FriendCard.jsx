// import { Link } from "react-router";
// import { LANGUAGE_TO_FLAG } from "../constants";
// import { getLanguageFlag } from "../lib/utils";

// const FriendCard = ({ friend }) => {
//   return (
//     <div className="card bg-base-200 hover:shadow-md transition-shadow">
//       <div className="card-body p-4">
//         {/* USER INFO */}
//         <div className="flex items-center gap-3 mb-3">
//           <div className="avatar size-12">
//             <img src={friend.profilePic} alt={friend.fullName} />
//           </div>
//           <h3 className="font-semibold truncate">{friend.fullName}</h3>
//         </div>

//         <div className="flex flex-wrap gap-1.5 mb-3">
//           <span className="badge badge-secondary text-xs">
//             {getLanguageFlag(friend.nativeLanguage)}
//             Native: {friend.nativeLanguage}
//           </span>
//           <span className="badge badge-outline text-xs">
//             {getLanguageFlag(friend.learningLanguage)}
//             Learning: {friend.learningLanguage}
//           </span>
//         </div>

//         <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full">
//           Message
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default FriendCard;
import { Link } from "react-router";
import { getLanguageFlagUrl } from "../lib/utils";

const FriendCard = ({ friend, onVideoCall }) => {
  const nativeFlagUrl = getLanguageFlagUrl(friend.nativeLanguage);
  const learningFlagUrl = getLanguageFlagUrl(friend.learningLanguage);

  return (
    <div className="flex bg-base-200 rounded-xl shadow-lg border border-base-300 overflow-hidden hover:shadow-2xl transition-all">
      {/* Left: Profile Image */}
      <div className="relative flex items-center justify-center bg-base-300 p-4 min-w-[110px]">
        <img
          src={friend.profilePic}
          alt={friend.fullName}
          className="rounded-full object-cover w-20 h-20 shadow ring-2 ring-primary/30"
        />
        {/* Online green dot */}
        <span className="absolute bottom-7 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-md"></span>
      </div>
      {/* Right: Info and Actions */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="font-bold text-lg mb-1">{friend.fullName}</h3>
          {friend.bio && (
            <p className="text-xs text-gray-500 mb-2 line-clamp-2">{friend.bio}</p>
          )}
          <div className="flex items-center gap-2 mb-2">
            {nativeFlagUrl && (
              <img src={nativeFlagUrl} alt="native" className="h-4 rounded shadow" />
            )}
            <span className="text-xs text-gray-500">{friend.nativeLanguage}</span>
            <span className="mx-1 text-xs text-gray-400">|</span>
            {learningFlagUrl && (
              <img src={learningFlagUrl} alt="learning" className="h-4 rounded shadow" />
            )}
            <span className="text-xs text-gray-500">{friend.learningLanguage}</span>
          </div>
          {friend.gender && (
            <div className="mb-2">
              <span className="badge badge-outline text-xs">{friend.gender}</span>
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-2">
          <Link
            to={`/chat/${friend._id}`}
            className="btn btn-primary btn-sm flex-1 rounded-full shadow hover:scale-105 transition-transform"
          >
            Message
          </Link>
          <button
            className="btn btn-accent btn-sm flex-1 rounded-full shadow hover:scale-105 transition-transform"
            onClick={() => onVideoCall(friend)}
          >
            Video Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;