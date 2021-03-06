import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper).toMatchSnapshot();
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Panel />);
  });

  it('should render Button component', () => {
    expect(wrapper.containsMatchingElement(<Button />)).toEqual(true)
  });

  describe('Asynchronous tests', () => {  
  it('async with promises', () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
  })
  })
  
});
