import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button.component.jsx';
import '../../../../setupTests.js';


describe('Button', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});