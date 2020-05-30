import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar.component.jsx';
import '../../../../setupTests.js';

describe('SearchBar', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});