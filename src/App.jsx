import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import SharedLayout from "./components/Shared/SharedLayout";
import OverView from "./pages/OverView";

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout/>}>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      {/* Dashboard Layout */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/overview" element={<OverView/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
