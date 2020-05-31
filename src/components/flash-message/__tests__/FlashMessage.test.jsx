import React from 'react';
import { shallow } from 'enzyme';
import FlashMessage from '../FlashMessage.component.jsx';
import '../../../../setupTests.js';

describe('FlashMessage', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<FlashMessage />);
        expect(wrapper).toMatchSnapshot();
    });
});