import React from 'react';
import { shallow } from 'enzyme';
import NewEventButton from '../NewEventButton.component.jsx';
import '../../../../setupTests.js';

describe('NewEventButton', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<NewEventButton />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});