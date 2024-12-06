import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Icon from "../Icon";

const MockCopyIcon = () => (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ContentCopyRoundedIcon"
      width="24"
      height="24"
    >
      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"></path>
    </svg>
);

const MockDiceIcon = () => (
    <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="CasinoRoundedIcon"
        width="24"
        height="24"
    >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"></path>
    </svg>
);

const MockIconComponents = {
    copy: MockCopyIcon,
    dice: MockDiceIcon,
}

type MockIconName = keyof typeof MockIconComponents

const props = {
    title: "Dummy Title",
    customStyle: "super-sonic-style",
    icon: "copy" as MockIconName
}

const MockIcon = () => {
    render(
        <Icon title={props.title} customStyle={props.customStyle} icon={props.icon}  />
    );
};

beforeEach(() => {
    MockIcon()
});

describe("icon rendering", () => {
    it("should render icon Title", () => {
        const IconTitle = screen.getByTitle(/Dummy Title/i);
        expect(IconTitle).toBeInTheDocument();
    });

    it("should render customStyle attribute", () => {
        const iconStyle = screen.getByTestId("ContentCopyRoundedIcon").parentElement;
        expect(iconStyle).toHaveClass("super-sonic-style");
    });    

    it("should render icon attribute", () => {
        const iconType = screen.getByTestId("ContentCopyRoundedIcon");
        expect(iconType).hasAttribute("copy");
    });
});