import "./Search.css";

function Search(): JSX.Element {
	return (
		<div className="Search">
			<label>Search Something</label>
			<input type="search" />
            <button>🔍</button>
            <span></span>
		</div>
	);
}

export default Search;
