import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import NavBar from '../src/components/NavBar.jsx';

describe('Test NavBar', () => {
  it('NavBar\'s GO button should call the passed in function', () => {
    let mockSearchHandler = jest.fn();
    const navBar = shallow((<NavBar 
      inputValue='dont care'
      searchHandler={mockSearchHandler}
      onChangeHandler={() => {}}/>));

    navBar.find('Button').simulate('click');
    expect(mockSearchHandler.mock.calls.length).toEqual(1);
  });

  it('When NavBar\'s input change should call the passed in changeHandler', () => {
    let mockChangeHandler = jest.fn();
    const navBar = shallow((<NavBar 
      inputValue='dont care'
      searchHandler={() => {}}
      onChangeHandler={mockChangeHandler}/>));

    navBar.find('FormControl').simulate('change');
    expect(mockChangeHandler.mock.calls.length).toEqual(1);
  });

  it('When hitting Enter in NavBar\'s input, the search handler should be called', () => {
    let mockSearchHandler = jest.fn();
    const navBar = shallow((<NavBar 
      inputValue='dont care'
      searchHandler={mockSearchHandler}
      onChangeHandler={() => {}}/>));

    navBar.find('FormControl').simulate('keyPress', {key: 'Enter'});
    expect(mockSearchHandler.mock.calls.length).toEqual(1);
  });
});