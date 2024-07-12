import { useState } from "react";
import { it, expect, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/search";

describe("Search component", () => {
  it("updates searchQuery state correctly", async () => {
    let searchQuery, setSearchQuery;
    const TestComponent = () => {
      [searchQuery, setSearchQuery] = useState("");
      return (
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      );
    };

    render(<TestComponent />);

    const inputElement = screen.getByPlaceholderText("Search by name...");

    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: "New Search Query" } });
    expect(searchQuery).toBe("New Search Query");
  });
});
