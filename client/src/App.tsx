import { useState } from "react";
import "./App.css";
import EventsSection from "./components/sections/events-section";
import HeroSection from "./components/sections/hero-section";
import { useDebounce } from "use-debounce";
import MapSvg from "./components/map-svg";
import SearchHeading from "./components/search-heading";
import SelectedRegions from "./components/selected-regions";
import Search from "./components/search";

function App() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [query] = useDebounce(searchQuery, 500);

  const handleToggleRegion = (regionName: string) => {
    if (selectedRegions.includes(regionName)) {
      setSelectedRegions(
        selectedRegions.filter((region) => region !== regionName)
      );
    } else {
      setSelectedRegions([...selectedRegions, regionName]);
    }
  };

  return (
    <main className="flex flex-col">
      <HeroSection />
      <div id="events" className="py-10 flex flex-col ">
        <SearchHeading />
        <MapSvg
          handleToggleRegion={handleToggleRegion}
          selectedRegions={selectedRegions}
        />
        <SelectedRegions
          handleToggleRegion={handleToggleRegion}
          selectedRegions={selectedRegions}
        />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <EventsSection selectedRegions={selectedRegions} query={query} />
      </div>
    </main>
  );
}

export default App;
