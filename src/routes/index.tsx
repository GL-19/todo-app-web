import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HomePage, ListPage, SignupPage } from "../pages";
import { useAuth } from "../providers/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

export function Router() {
	const { isAuthenticated, user } = useAuth();
	console.log(isAuthenticated, user);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<PublicRoute isAuthenticated={isAuthenticated}>
							<HomePage />
						</PublicRoute>
					}
				/>
				<Route
					path="/sign-up"
					element={
						<PublicRoute isAuthenticated={isAuthenticated}>
							<SignupPage />
						</PublicRoute>
					}
				/>
				<Route
					path="/todo-list"
					element={
						<ProtectedRoute isAuthenticated={isAuthenticated}>
							<ListPage />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<p>Page not found: 404!</p>} />
			</Routes>
		</BrowserRouter>
	);
}
