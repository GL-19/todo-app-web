import { createContext, useEffect, useState } from "react";

interface AuthContextData {}

const AuthContext = createContext<AuthContextData>({});

export const AuthProvider: React.FC = ({ children }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState({});
	const [isSignedIn, setSignedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const stringfiedUser = localStorage.getItem("user");

		if (token && stringfiedUser) {
			setToken(token);
			setUser(JSON.parse(stringfiedUser));
			setSignedIn(true);
		}
	}, []);

	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
