import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SectionMenu from "../SectionMenu";

const props = {test: "I am the prop tester"};

const MockSectionMenu = () => {
    render(
        <MemoryRouter>
            <SectionMenu object={props} />
        </MemoryRouter>
    );
}

beforeEach(() => {
    vi.clearAllMocks();
    MockSectionMenu();
});

describe("render SectionMenu", () => {
    it("should render the menu title", () => {
        const MenuTitle = screen.getByText(/Menu/i);
        expect(MenuTitle).toBeInTheDocument();
    });

    it("should render the correct number of links", () => {
        const Links = screen.getAllByRole("link");
        expect(Links).toHaveLength(Object.keys(props).length);
    });
});