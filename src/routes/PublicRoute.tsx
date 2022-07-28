import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
	isAuthenticated: boolean;
}

export function PublicRoute({ isAuthenticated }: PublicRouteProps) {
	if (isAuthenticated) {
		return <Navigate to="/todo-list" />;
	}

	return <Outlet />;
}
