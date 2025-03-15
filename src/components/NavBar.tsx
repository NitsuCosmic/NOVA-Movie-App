import { NavLink } from "react-router";

export const NavBar = () => {
	return (
		<nav className="flex justify-center items-center gap-2 p-2 max-w-7xl mx-auto">
			<NavLink to={"/"}>
				<h2 className="text-2xl font-bold text-gray-50">NOVA</h2>
			</NavLink>
		</nav>
	);
};
