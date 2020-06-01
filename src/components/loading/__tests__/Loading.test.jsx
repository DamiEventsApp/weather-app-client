import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading.component.jsx';
import '../../../../setupTests.js';

describe('Loading', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper).toMatchSnapshot();
    });
});