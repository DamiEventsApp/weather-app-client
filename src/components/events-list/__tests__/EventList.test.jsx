import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList.component.jsx';
import '../../../../setupTests.js';

describe('EventList', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<EventList />);
        expect(wrapper).toMatchSnapshot();
    });
});