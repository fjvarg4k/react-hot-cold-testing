import React from 'react';
import {shallow, mount} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', function() {
  it('Renders without crashing', function() {
    shallow(<AuralStatus />);
  });

  it('Renders an aural status update', function() {
    const test = 'You are listening to a game.';

    const wrapper = shallow(<AuralStatus auralStatus={test} />);
    expect(wrapper.contains(test)).toEqual(true);
  });
});
