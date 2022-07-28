import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ListPage, SignupPage } from "../pages";
import { useAuth } from "../providers/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

export function Router() {
	const { isAuthenticated } = useAuth();

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/signup" element={<SignupPage />} />
				</Route>

				<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
					<Route path="/todo-list" element={<ListPage />} />
				</Route>

				<Route path="*" element={<p>Page not found: 404!</p>} />
			</Routes>
		</BrowserRouter>
	);
}
