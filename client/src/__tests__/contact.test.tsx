import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../pages/contact";

describe("Contact page", () => {
  it("renders correctly with heading Contact", () => {
    render(<Contact />);
    const contactHeadingElement = screen.getByTestId("heading-contact");
    expect(contactHeadingElement).toBeInTheDocument();
  });
});
