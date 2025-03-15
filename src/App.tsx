import { Outlet } from "react-router";
import { Header } from "./components/layout/Header";

function App() {
	return (
		<div className="min-h-svh bg-gradient-to-br from-gray-900 to-gray-800">
			<Header />
			<main className="max-w-7xl mx-auto">
				<Outlet />
			</main>
		</div>
	);
}

export default App;
