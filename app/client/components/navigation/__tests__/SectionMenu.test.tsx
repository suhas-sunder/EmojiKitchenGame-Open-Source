import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SectionMenu from "../SectionMenu";

const props = {test: "props to the troll"};

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
    it("", () => {});
});