import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '@/fragments/Navbar';
import Footers from '@/fragments/Footers';

describe('Navbar components', () => {
    it('should navbar render', () => {
        const { container } = render(<Navbar />);
        expect(container).toMatchSnapshot();
    });
    // it('should navbar text', () => {
    //     const { getByText } = render(<Navbar />);
    //     expect(getByText('Navbar')).toBeInTheDocument();
    // });
});

describe('Footers components', () => {
    it('should footer render', () => {
        const { container } = render(<Footers />);
        expect(container).toMatchSnapshot();
    });
    // it('should footer text', () => {
    //     const { getByText } = render(<Footers />);
    //     expect(
    //         getByText('Copyright © 2024 - All right reserved')
    //     ).toBeInTheDocument();
    // });
});
