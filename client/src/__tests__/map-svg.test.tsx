import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MapSvg from "../components/map-svg";

describe("MapSvg component", () => {
  it("adds region by name correctly on click", () => {
    const handleToggleRegion = vi.fn();

    render(
      <MapSvg handleToggleRegion={handleToggleRegion} selectedRegions={[]} />
    );
    // Simulate click on the path element representing "Žilina"
    const zilinaPath = screen.getByTestId("žilina");
    fireEvent.click(zilinaPath);

    // Check if handleToggleRegion was called with the correct argument
    expect(handleToggleRegion).toHaveBeenCalledWith("Žilina");
  });
});
