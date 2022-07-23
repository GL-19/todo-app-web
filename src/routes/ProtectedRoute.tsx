import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
	isAuthenticated: boolean;
}

export function ProtectedRoute({ isAuthenticated }: ProtectedRouteProps) {
	console.log(isAuthenticated);
	if (!isAuthenticated) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
}
