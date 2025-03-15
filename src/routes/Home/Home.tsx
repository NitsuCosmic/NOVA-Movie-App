import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

export const Home = () => {
	const [title, setTitle] = useState<string>("");

	const handleChange = (value: string) => {
		setTitle(value);
	};

	return (
		<section className="text-center space-y-4 text-gray-50 p-4 my-16">
			<h1 className="text-4xl font-bold">Discover Your Next Favorite Movie</h1>
			<p className="text-lg text-gray-300">
				Search through the extensive database of movies and find the perfect
				film for your next movie night.
			</p>
			<SearchBar title={title} onChange={handleChange} />
		</section>
	);
};
