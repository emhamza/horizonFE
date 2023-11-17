import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;