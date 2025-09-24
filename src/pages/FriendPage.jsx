import { useQuery } from "@tanstack/react-query";
import FriendCard from "../components/FriendCard";
import PageLoader from "../components/PageLoader";
import NoFriendsFound from "../components/NoFriendsFound";
import { getFriends } from "../lib/api";
import toast from "react-hot-toast";

const FriendPage = () => {
  const { data: friends, isLoading, isError } = useQuery({
    queryKey: ["friends"],
    queryFn: getFriends,
  });

  const handleVideoCall = (friend) => {
    toast.success(`Starting video call with ${friend.fullName}!`);
    window.location.href = `/call/${friend._id}`;
  };

  if (isLoading) return <PageLoader />;

  // Only show error if there is an error and no friends data
  if (isError && (!friends || friends.length === 0)) {
    return <div className="text-center text-error">Failed to load friends.</div>;
  }

  return (
    <div className="p-6  mt-3 ml-6 max-2xl w-130">
      <h2 className="text-3xl font-bold mb-6 text-left">Your Friends</h2>
      {friends && friends.length > 0 ? (
        <div className="flex flex-col gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend._id} friend={friend} onVideoCall={handleVideoCall} />
          ))}
        </div>
      ) : (
        <NoFriendsFound />
      )}
    </div>
  );
};

export default FriendPage;