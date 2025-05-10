import UserProfile from "@/components/Profile/UserProfile";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

function Profile() {
  const { auth } = useAuth();
  return (
    <div>
      <UserProfile user={auth.User} />
    </div>
  );
}

export default Profile;
