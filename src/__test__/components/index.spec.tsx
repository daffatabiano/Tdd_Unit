import React from 'react';
import { render } from '@testing-library/react';
import ListNavbar from '../../components/ListNavbar';

describe('List component', () => {
    it('should render ', () => {
        const { container } = render(<ListNavbar />);
        expect(container).toMatchSnapshot();
    });
});

describe('List component', () => {
    it('should render text', () => {
        const { getByText } = render(<ListNavbar />);
        expect(getByText('Disabled')).toBeInTheDocument();
    });
});

describe('List component', () => {
    it('should render text', () => {
        const { getByRole } = render(<ListNavbar />);
        expect(getByRole('presentation')).toBeInTheDocument();
    });
});
