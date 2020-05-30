import React from 'react';
import { shallow } from 'enzyme';
import EventModal from '../EventModal.component.jsx';
import '../../../../setupTests.js';

describe('BaseButton', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<EventModal />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});