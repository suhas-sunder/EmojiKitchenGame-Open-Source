import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from  '../NavBar';

describe('NavBar Component', () => {
    it('render the NavBar Component', () => {
        render((
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        ));
    });
});