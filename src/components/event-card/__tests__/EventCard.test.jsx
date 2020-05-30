import React from 'react';
import { shallow } from 'enzyme';
import EventCard from '../EventCard.component.jsx';
import '../../../../setupTests.js';

describe('EventCard', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<EventCard />);
        expect(wrapper).toMatchSnapshot();
    });
});