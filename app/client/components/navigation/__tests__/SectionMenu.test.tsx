import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SectionMenu from "../SectionMenu";

const props = {"test-key": "I am the prop tester"};

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

    it("should render links with correct text format", () => {
        Object.keys(props).forEach((key) => {
            const LinkText = screen.getByText(key.split("-").join(" "));
            expect(LinkText).toBeInTheDocument();
        });
    });
    
    it("should render links with correct href", () => {
        Object.keys(props).forEach((key) => {
            const LinkHref = screen.getByText(key.split("-").join(" "));
            expect(LinkHref).toHaveAttribute("href", `/#${key}`)
        });
    });
});