import React from 'react';
import { shallow } from 'enzyme';
import TodaysEvents from '../TodaysEvents.component.jsx';
import '../../../../setupTests.js';

describe('TodaysEvents', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<TodaysEvents />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});