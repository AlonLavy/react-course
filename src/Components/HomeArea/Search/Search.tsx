import { useState } from "react";
import "./Search.css";

function Search(): JSX.Element {
	const [searchInput, setSearchInput] = useState<string>();
	return (
		<div className="Search">
			<label>Search Something</label>
			<input
				type="search"
				onChange={(event) => {
					setSearchInput(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					alert(`searching ${searchInput}`);
				}}
			>
				🔍
			</button>
			<span>{searchInput}</span>
		</div>
	);
}

export default Search;
