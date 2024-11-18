import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from "../Logo";

const mockSetShowMobileMenu = vi.fn();

const MockLogo = () => {
  render(
    <MemoryRouter>
      <Logo setShowMobileMenu={mockSetShowMobileMenu} />
    </MemoryRouter>
  );
};

beforeEach(() => {
  vi.clearAllMocks();
  MockLogo();
});

describe("render Logo", () => {
  it("should render the logo", () => {
    const LogoLink = screen.getByRole("link", {
      name: /emojikitchengame.com logo/i,
    });
    expect(LogoLink).toBeInTheDocument();
  });

  //Renders image with correct alt text

  //Renders text "EmojiKitchenGame"

  //Renders text ".com"

  //Renders a navigation link with appropriate redirect url
});

describe("user interactions with logo", () => {
  it("should call setShowMobileMenu in the false state", () => {
    const LogoLink = screen.getByRole("link", {
      name: /emojikitchengame.com logo/i,
    });
    fireEvent.click(LogoLink);
    expect(mockSetShowMobileMenu).toHaveBeenCalledWith(false);
  });

  it("should change setShowMobileMenu to true state after click", () => {
    const LogoLink = screen.getByRole("link", {
      name: /emojikitchengame.com logo/i,
    });
    fireEvent.click(LogoLink);
    expect(mockSetShowMobileMenu).toHaveBeenCalledTimes(1);
  });
});
