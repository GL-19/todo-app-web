import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
	isAuthenticated: boolean;
}

export function PublicRoute({ isAuthenticated }: PublicRouteProps) {
	console.log(isAuthenticated);
	if (isAuthenticated) {
		return <Navigate to="/todo-list" />;
	}

	return <Outlet />;
}
