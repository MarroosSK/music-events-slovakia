import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import HeroSection from "../components/sections/hero-section";

describe("HeroSection Component", () => {
  it("renders the HeroSection component  heading correctly", () => {
    render(<HeroSection />);
    expect(screen.getByText(/music/i)).toBeInTheDocument();
    expect(
      screen.getByText(/list of concerts & festivals in Slovakia 2024/i)
    ).toBeInTheDocument();
  });

  it("renders the button with the correct link", () => {
    render(<HeroSection />);
    const linkElement = screen.getByTestId("hero-button-link");
    expect(linkElement).toHaveAttribute("href", "#events");
  });
});
