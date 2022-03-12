import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../fbAuth";

function Dashboard() {
  const [user, loading ] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);

  return (
    <div className="dashboard">
       <div className="container_dashboard">
        Logged in Email: <div>{user?.email}</div>
         <button className="button_dashboard" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}
export default Dashboard;