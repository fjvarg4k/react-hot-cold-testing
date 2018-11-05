import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoSection from './info-section';

describe('<InfoSection />', function() {
  it('Renders without crashing', function() {
    shallow(<InfoSection />);
  });
});
