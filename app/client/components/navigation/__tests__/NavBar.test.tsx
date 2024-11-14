import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from  '../NavBar';

describe('NavBar Component', () => {
    it('render the NavBar Component', () => {
        render((
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        ));

        expect(screen.getByTestId('burger-icons')).toBeInTheDocument;
    });

    it('checks upon initialization that the menu is hidden', () => {
        render((<MemoryRouter>
            <NavBar />
        </MemoryRouter>));

        expect(document.body.classList.contains("overlfow-y-hidden")).toBe(false);
    });

    it('shows menu when burger-icons clicked', () => {
        render((
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        ));

        const BurgerIcon = screen.getByTestId('burger-icons');
        fireEvent.click(BurgerIcon);
        expect(document.body.classList.contains("overflow-y-hidden")).toBe(true);
    });

    it('hides the menu when a link is clicked', () => {
        render((
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        ));

        const link = screen.getByText(/Emoji Copy and Paste/i);
        fireEvent.click(link);
        expect(document.body.classList.contains("overflow-y-hidden")).toBe(false);
    });

    it('hides the menu when the screen is resized', () => {
        render((
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        ));

        const BurgerIcon = screen.getByTestId('burger-icons');
        fireEvent.click(BurgerIcon);
        expect(document.body.classList.contains("overflow-y-hidden")).toBe(true);

        fireEvent(window, new Event("resize"));
        expect(document.body.classList.contains("overflow-y-hidden")).toBe(false);
    });
});