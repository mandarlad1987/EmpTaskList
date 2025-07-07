import { useContext } from "react";
import { authContext } from "./context/AuthContext";
import Login from "./component/auth/Login";
import AdminDashboard from "./component/AdminDashboard";
import EmployeDashboard from "./component/EmployeDashboard";

function App() {
  //localStorage.clear()
  const { isLogin } = useContext(authContext);
  const role = localStorage.getItem("currentRole"); // Role ko yahan se lein

  if (!isLogin) return <Login />;

  if (role === "admin") return <AdminDashboard />;
  if (role === "employee") return <EmployeDashboard />;

  return <div>Unknown role</div>;
}

export default App;
