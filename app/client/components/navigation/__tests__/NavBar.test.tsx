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

describe("render Navbar", () => {
  //Should render navbar (use getByRole and look for "navigation" role. Always try to use getByRole whenever possible.)
    it("should render burger icons", () => {
        expect(screen.getByTestId("burger-icons")).toBeInTheDocument();
    });

    it("should render the Emoji Combos Link", () => {
        expect(screen.getByRole("link", {name: / Emoji Combos/i})).toBeInTheDocument();
    });

    it("should render the text faces link", () => {
        expect(screen.getByRole("link", {name: /ಥ_ಥ Text Faces/i})).toBeInTheDocument();
    });

    it("should render the emoji copy and paste link", () => {
        expect(screen.getByRole("link", {name:  /Emoji Copy and Paste/i})).toBeInTheDocument();
    });
});


//   it("should check upon initialization that the menu is hidden", () => {
//     expect(document.body.classList.contains("overlfow-y-hidden")).toBe(false);
//   });

//   it("should show menu when burger-icons clicked", () => {
//     const BurgerIcon = screen.getByTestId("burger-icons");
//     fireEvent.click(BurgerIcon);
//     expect(document.body.classList.contains("overflow-y-hidden")).toBe(true);
//   });

//   it("should hide the menu when a link is clicked", () => {
//     const link = screen.getByRole('link', { name : /Emoji Copy and Paste/i });
//     fireEvent.click(link);
//     expect(document.body.classList.contains("overflow-y-hidden")).toBe(false);
//   });

//   it("should hide the menu when the screen is resized", () => {
//     const BurgerIcon = screen.getByTestId("burger-icons");
//     fireEvent.click(BurgerIcon);
//     expect(document.body.classList.contains("overflow-y-hidden")).toBe(true);

//     fireEvent(window, new Event("resize"));
//     expect(document.body.classList.contains("overflow-y-hidden")).toBe(false);
//   });

