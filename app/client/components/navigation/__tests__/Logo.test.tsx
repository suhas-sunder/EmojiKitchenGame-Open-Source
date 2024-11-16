import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from "../Logo";

const MockLogo = () => {
    const setShowMobileMenu = vi.fn();
    render(
        <MemoryRouter>
            <Logo setShowMobileMenu={setShowMobileMenu} />
        </MemoryRouter>
    );
}

beforeEach(() => {
    MockLogo()
});

describe("render Logo", () => {
    it("", () => {

    });
});