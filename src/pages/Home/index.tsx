export function HomePage() {
	function handleSubmit() {}

	return (
		<>
			<h1>Home Page</h1>
			<form onSubmit={handleSubmit}>
				<input type="email" />
				<input type="password" />
				<button type="submit">Login</button>
			</form>
		</>
	);
}
