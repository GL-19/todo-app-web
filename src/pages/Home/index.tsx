import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { useAuth } from "../../providers/AuthProvider";

export function HomePage() {
	const { handleLogin } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		try {
			event.preventDefault();

			setError(false);

			await handleLogin(email, password);
		} catch {
			setError(true);
		}
	}

	return (
		<>
			<Header />
			<h1>Home Page</h1>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="email"
					type="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<input
					placeholder="password"
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>

				{error && <p>Email or Password incorrect!</p>}
				<button type="submit">Login</button>
			</form>
		</>
	);
}
