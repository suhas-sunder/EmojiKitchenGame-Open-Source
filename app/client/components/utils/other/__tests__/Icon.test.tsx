import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon, { IconName } from "../Icon";

const props = {
    title: "Dummy Title",
    customStyle: "super-sonic-style",
    icon: "copy" as IconName
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