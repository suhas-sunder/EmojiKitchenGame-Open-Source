import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../NavBar";

//Mocking the render and calling it before each test prevents code from being repeated. You can pass props to the component when needed.
const MockNavBar = () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
};

beforeEach(() => {
  MockNavBar();
});

describe("NavBar Component", () => {
  //Should render navbar (use getByRole and look for "navigation" role. Always try to use getByRole whenever possible.)

  //Should render nav links

  //Should render logo

  //(when writing tests that start with "it", follow it with the word "should") If your using "test" instead of "it", then start with "if" or something along those lines.

  it("should render burger icons", () => {
    expect(screen.getByTestId("burger-icons")).toBeInTheDocument();
  });

  it("should check upon initialization that the menu is hidden", () => {
    expect(document.body.classList.contains("overlfow-y-hidden")).toBe(false);
  });

  it("should show menu when burger-icons clicked", () => {
    const BurgerIcon = screen.getByTestId("burger-icons");
    fireEvent.click(BurgerIcon);
    expect(document.body.classList.contains("overflow-y-hidden")).toBe(true);
  });

  it("should hide the menu when a link is clicked", () => {
    const link = screen.getByText(/Emoji Copy and Paste/i);
    fireEvent.click(link);
    expect(document.body.classList.contains("overflow-y-hidden")).toBe(false);
  });

  it("should hide the menu when the screen is resized", () => {
    const BurgerIcon = screen.getByTestId("burger-icons");
    fireEvent.click(BurgerIcon);
    expect(document.body.classList.contains("overflow-y-hidden")).toBe(true);

    fireEvent(window, new Event("resize"));
    expect(document.body.classList.contains("overflow-y-hidden")).toBe(false);
  });
});
