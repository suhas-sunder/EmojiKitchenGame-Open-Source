import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from "../Logo";


const setShowMobileMenu = vi.fn();

const MockLogo = () => {
    render(
        <MemoryRouter>
            <Logo setShowMobileMenu={setShowMobileMenu} />
        </MemoryRouter>
    );
}

beforeEach(() => {
    vi.clearAllMocks();
    MockLogo();
});

describe("render Logo", () => {
    it("should render the logo", () => {
        expect(screen.getByTestId("logo-navigation-link")).toBeInTheDocument();
    });
});