import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo.component.jsx';
import '../../../../setupTests.js';

describe('Logo', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper).toMatchSnapshot();
    });
});