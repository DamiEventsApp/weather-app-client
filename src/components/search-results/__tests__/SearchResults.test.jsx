import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from '../SearchResults.component.jsx';
import '../../../../setupTests.js';

describe('SearchResults', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<SearchResults />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});