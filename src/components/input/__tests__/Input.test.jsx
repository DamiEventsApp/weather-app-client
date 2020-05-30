import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input.component.jsx';
import '../../../../setupTests.js';

describe('Input', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper).toMatchSnapshot();
    });
});