import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

const MockFooter = () => {
    <MemoryRouter>
        <Footer /> 
    </MemoryRouter>
};

beforeEach(() => {
    MockFooter();
});

describe("Render render footer", () => {
    it("", () => {});
});