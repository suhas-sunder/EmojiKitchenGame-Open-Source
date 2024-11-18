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

  it("should render img with correct alt text", () => {
    const ImgText = screen.getByRole("img", {
        name: /logo depicting a chef cooking with emoji as ingredients/i
    });
    expect(ImgText).toBeInTheDocument();
  });
  
  it("should render the text EmojiKitchenGame", () => {
    const TitleTxt = screen.getByText(/EmojiKitchenGame/i);
    expect(TitleTxt).toBeInTheDocument();
  });

  it("should render the text .com", () => {
    const TitleTxt = screen.getByText(/.com/i);
    expect(TitleTxt).toBeInTheDocument();
  });
  //Renders a navigation link with appropriate redirect url
  it("should render the navigation link with redirect url", () => {
    const LinkRedirect = screen.getByRole("link", {
        name: /emojikitchengame.com/i
    });
    expect(LinkRedirect).toHaveAttribute("href", "/");
  });
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
