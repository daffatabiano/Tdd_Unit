import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages';
import About from '@/pages/About';

describe('Homepage', () => {
    it('should render', () => {
        const { container } = render(<Home />);

        expect(container).toMatchSnapshot();
    });
});

describe('Homepage', () => {
    it('should render', () => {
        const { getByRole } = render(<Home />);

        expect(getByRole('content')).toMatchSnapshot();
    });
});

describe('HomePage', () => {
    it('should render home text', () => {
        const { getByText } = render(<Home />);
        expect(getByText('Hello World')).toBeInTheDocument();
    });
});

describe('HomePage', () => {
    it('should render home role', () => {
        const { getByRole } = render(<Home />);
        expect(getByRole('main')).toBeInTheDocument();
    });
});

describe('About Page', () => {
    it('should render about', () => {
        const { container } = render(<About />);
        expect(container).toMatchSnapshot();
    });
});
