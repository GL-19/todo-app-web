import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
	isAuthenticated: boolean;
	children: ReactNode;
}

export function ProtectedRoute({ children, isAuthenticated }: ProtectedRouteProps) {
	console.log(isAuthenticated);
	if (!isAuthenticated) {
		return <Navigate to="/" />;
	}

	return <>{children}</>;
}
