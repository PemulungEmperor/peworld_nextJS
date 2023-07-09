import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";

describe("Testing Id", () => {
  it("Button To go to Find talent/employee Page", () => {
    render(<Footer />);
    // check if all components are rendered
    expect(screen.getByTestId("phone")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
  });
});
