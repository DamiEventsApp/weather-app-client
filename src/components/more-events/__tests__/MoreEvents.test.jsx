import React from 'react';
import { shallow } from 'enzyme';
import MoreEvents from '../MoreEvents.component.jsx';
import '../../../../setupTests.js';

describe('MoreEvents', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<MoreEvents />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});