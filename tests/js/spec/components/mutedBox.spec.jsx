import React from 'react';
import {shallow} from 'enzyme';

import MutedBox from 'app/components/mutedBox';

describe('MutedBox', function() {
  describe('render()', function() {
    it('handles ignoreUntil', function() {
      let wrapper = shallow(
        <MutedBox statusDetails={{ignoreUntil: '2017-06-21T19:45:10Z'}} />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('handles ignoreCount', function() {
      let wrapper = shallow(<MutedBox statusDetails={{ignoreUserCount: 100}} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('handles ignoreCount with ignoreWindow', function() {
      let wrapper = shallow(
        <MutedBox statusDetails={{ignoreCount: 100, ignoreWindow: 1}} />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('handles ignoreUserCount', function() {
      let wrapper = shallow(<MutedBox statusDetails={{ignoreUserCount: 100}} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('handles ignoreUserCount with ignoreUserWindow', function() {
      let wrapper = shallow(
        <MutedBox statusDetails={{ignoreUserCount: 100, ignoreUserWindow: 1}} />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('handles default', function() {
      let wrapper = shallow(<MutedBox statusDetails={{}} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
