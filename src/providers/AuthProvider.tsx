import { createContext, useContext, useEffect, useState } from "react";
import { ICreateUserDTO } from "../interfaces/DTO/ICreateUserDTO";
import { User } from "../interfaces/User";
import { api } from "../services/api";

interface AuthContextData {
	user: User;
	token: string;
	isAuthenticated: boolean;
	handleLogin: (name: string, email: string) => Promise<void>;
	handleLogout: () => Promise<void>;
	handleSignup: (data: ICreateUserDTO) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState<User>({} as User);
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

			const token = response.data.token as string;
			const user = response.data.user as User;

			setAuthenticated(true);
			setToken(token);
			setUser(user);

			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));
		} catch (error) {
			console.log("login failed!");
			throw new Error("Login failed!");
		}
	}

	async function handleLogout() {
		try {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			setAuthenticated(false);
			setToken("");
			setUser({} as User);
		} catch (error) {
			console.log(error);
		}
	}

	async function handleSignup(data: ICreateUserDTO) {
		try {
			await api.post("/users", {
				...data,
			});
		} catch (error) {
			console.log("Signup failed!");
			console.log(error);
			throw new Error("Signup failed!");
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
				handleSignup,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	return useContext(AuthContext);
}
