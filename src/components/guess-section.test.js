import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessSection from './guess-section';

describe('<GuessSection />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessSection />);
  });
});
