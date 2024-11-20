import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

const MockFooter = () => {
   render(
        <MemoryRouter initialEntries={['/']}>
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
        expect(FooterLink).toBeInTheDocument();
    });

    it("should have a role of navigation", () => {
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("should render the copy right symbol", () => {
        const LegalText = screen.getByText(/© 2024/i);
        expect(LegalText).toBeInTheDocument();
    });

    it("should render text - All Rights Reserved", () => {
        const LegalText = screen.getByText(/- All Rights Reserved./i);
        expect(LegalText).toBeInTheDocument();
    });
});

describe("user interactions", async () => {
    it("should check to see if Sitemap points to correct URL", () => {
        const FooterLink = screen.getByRole("link", {name: /Sitemap/i});
        expect(FooterLink).toHaveAttribute("href", "/sitemap");
    });

    it("should check to see if Privacy link clicked", () => {
        const FooterLink = screen.getByRole("link", {name: /Privacy/i});
        expect(FooterLink).toHaveAttribute("href", "/privacy-policy");
    });

    it("should check to see if Cookie link clicked", () => {
        const FooterLink = screen.getByRole("link", {name: /Cookie/i});
        expect(FooterLink).toHaveAttribute("href", "/cookies-policy");
    });

    it("should check to see if Terms Of Service link clicked", () => {
        const FooterLink = screen.getByRole("link", {name: /Terms Of Service/i});
        expect(FooterLink).toHaveAttribute("href", "/terms-of-service");
    });
});