import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';

describe('<Game />', function() {
  it('Renders without crashing', function() {
    shallow(<Game />);
  });

  it('Can start a new game', function() {
    
  });
});
