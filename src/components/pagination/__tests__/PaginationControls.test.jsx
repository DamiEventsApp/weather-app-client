import React from 'react';
import { shallow } from 'enzyme';
import PaginationControls from '../PaginationControls.component.jsx';
import '../../../../setupTests.js';

describe('PaginationControls', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<PaginationControls />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});