import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
	isAuthenticated: boolean;
	children: ReactNode;
}

export function PublicRoute({ children, isAuthenticated }: PublicRouteProps) {
	console.log(isAuthenticated);
	if (isAuthenticated) {
		return <Navigate to="/todo-list" />;
	}

	return <>{children}</>;
}
