import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm.component.jsx';
import '../../../../setupTests.js';

describe('BaseButton', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toMatchSnapshot();
    });
});