import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface AuthContextData {
	token: string;
	isAuthenticated: boolean;
	user:
		| {
				id: string;
				name: string;
				email: string;
		  }
		| {};
	handleLogin: (name: string, email: string) => Promise<void>;
	handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState({});
	const [isAuthenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const stringfiedUser = localStorage.getItem("user");

		if (token && stringfiedUser) {
			setToken(token);
			setUser(JSON.parse(stringfiedUser));
			setAuthenticated(true);
		}
	}, []);

	async function handleLogin(email: string, password: string) {
		try {
			const response = await api.post("/users/sessions", { email, password });

			const token = response.data.token;
			const user = response.data.user;

			setAuthenticated(true);
			setToken(token);
			setUser(user);

			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));
		} catch (error) {
			console.log("login failed!");
			throw new Error("login failed!");
		}
	}

	async function handleLogout() {
		try {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			setAuthenticated(false);
			setToken("");
			setUser({});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<AuthContext.Provider
			value={{
				token,
				isAuthenticated,
				user,
				handleLogin,
				handleLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	return useContext(AuthContext);
}
