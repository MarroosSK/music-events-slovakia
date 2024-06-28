const SelectedRegions = ({
  handleToggleRegion,
  selectedRegions,
}: {
  handleToggleRegion: (regionName: string) => void;
  selectedRegions: string[] | null;
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto gap-2 py-3">
      {selectedRegions?.map((district) => (
        <div
          key={district}
          className="bg-green-200 px-2 py-1 flex items-center"
        >
          <span className="mr-2">{district}</span>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => handleToggleRegion(district)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedRegions;
