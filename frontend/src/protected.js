import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  return localStorage.getItem("user-infor") ? <Outlet /> : <Navigate to="/admin" />;
};
export default ProtectedRoutes;