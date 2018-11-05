import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from './header';

describe('<Header />', function() {
  it('Renders without crashing', function() {
    shallow(<Header />);
  });
});
