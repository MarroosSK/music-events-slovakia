import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SelectedRegions from "../components/selected-regions";

describe("SelectedRegions component", () => {
  it("removes regions correctly", () => {
    const handleToggleRegion = vi.fn();

    render(
      <SelectedRegions
        handleToggleRegion={handleToggleRegion}
        selectedRegions={["Bratislava", "Žilina"]}
      />
    );

    fireEvent.click(screen.getAllByText("X", { exact: false })[0]);

    expect(handleToggleRegion).toHaveBeenCalledWith("Bratislava");
  });
});
