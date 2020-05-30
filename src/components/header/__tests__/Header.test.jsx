import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header.component.jsx';
import '../../../../setupTests.js';

describe('Header', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});