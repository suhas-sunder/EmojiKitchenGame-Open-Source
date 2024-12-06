import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
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

const MockIconComponents = {
    copy: MockCopyIcon,
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
});