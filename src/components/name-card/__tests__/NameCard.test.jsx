import React from 'react';
import { shallow } from 'enzyme';
import NameCard from '../NameCard.component.jsx';
import '../../../../setupTests.js';

describe('NameCard', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<NameCard />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});