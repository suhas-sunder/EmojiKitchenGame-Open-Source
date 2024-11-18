import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

const MockFooter = () => {
   render(
        <MemoryRouter>
            <Footer /> 
        </MemoryRouter>
    );
};

beforeEach(() => {
    vi.clearAllMocks()
    MockFooter();
});

describe("Render footer", () => {
    it("should render text EmojiKitchenGame", () => {
        const FooterText = screen.getByText(/EmojiKitchenGame/i);
        expect(FooterText).toBeInTheDocument();
    });

    it("should render the link Sitemap", () => {
        const FooterLink = screen.getByRole("link", {name: /Sitemap/i});
        expect(FooterLink).toBeInTheDocument();
    });

    it("should render the link Privacy", () => {
        const FooterLink = screen.getByRole("link", {name: /Privacy/i});
        expect(FooterLink).toBeInTheDocument();
    });

    it("should render the link Cookie", () => {
        const FooterLink = screen.getByRole("link", {name: /Cookie/i});
        expect(FooterLink).toBeInTheDocument();
    });

    it("should render the link Terms of Service", () => {
        const FooterLink = screen.getByRole("link", {name: /Terms Of Service/i});
    });
});