import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from '../WeatherCard.component.jsx';
import '../../../../setupTests.js';

describe('WeatherCard', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<WeatherCard />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});