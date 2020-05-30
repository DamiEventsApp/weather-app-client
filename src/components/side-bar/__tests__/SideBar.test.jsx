import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../SideBar.component.jsx';
import '../../../../setupTests.js';

describe('SideBar', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<SideBar />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});