import React from 'react';
import {shallow, mount} from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', function() {
  it('Renders without crashing', function() {
    shallow(<StatusSection auralStatus="" guesses={[]} />);
  });
});
