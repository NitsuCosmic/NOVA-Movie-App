import { Input } from "./ui/input";

type SearchBarProps = {
	title: string;
	onChange: (e: string) => void;
};

export const SearchBar = ({ title, onChange }: SearchBarProps) => {
	return (
		<form className="flex justify-center">
			<Input
				value={title}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Search for a movie..."
				className="max-w-xl"
			/>
		</form>
	);
};
