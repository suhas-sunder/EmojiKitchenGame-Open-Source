import '@testing-library/jest-dom';
import  { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from '../Logo';

describe('Logo Component', () => {  
    it('setup', () => {
        expect(true).toBe(true);
    });
});