import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.component.jsx';
import '../../../../setupTests.js';


describe('App', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});