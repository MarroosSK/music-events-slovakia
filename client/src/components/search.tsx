const Search = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex items-center justify-center gap-x-4 mb-4 py-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2"
      />
    </div>
  );
};

export default Search;
