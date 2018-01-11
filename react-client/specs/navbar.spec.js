import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../src/components/NavBar.jsx';
import { shallow } from 'enzyme';

describe('Test NavBar', () => {
  it('NavBar inputValue received to be set in input\'s value', () => {
    let exampleInputValue = 'test input value';
    let component = renderer.create(
      <NavBar inputValue={exampleInputValue}
        searchHandler={() => {}}
        onChangeHandler={() => {}}/>
    );
  
    let tree = component.toJSON();
    expect(tree.children[1].props.value).toBe(exampleInputValue);
  });
  
  it('NavBar\'s GO button should call the passed in function', () => {
    let mockSearchHandler = jest.fn();
    const navBar = shallow((<NavBar 
      inputValue='dont care'
      searchHandler={mockSearchHandler}
      onChangeHandler={() => {}}/>));

    navBar.find('button').simulate('click');
    expect(mockSearchHandler.mock.calls.length).toEqual(1);
  });

  it('When NavBar\'s input change should call the passed in changeHandler', () => {
    let mockChangeHandler = jest.fn();
    const navBar = shallow((<NavBar 
      inputValue='dont care'
      searchHandler={() => {}}
      onChangeHandler={mockChangeHandler}/>));

    navBar.find('input').simulate('change');
    expect(mockChangeHandler.mock.calls.length).toEqual(1);
  });

  it('When hitting Enter in NavBar\'s input, the search handler should be called', () => {
    let mockSearchHandler = jest.fn();
    const navBar = shallow((<NavBar 
      inputValue='dont care'
      searchHandler={mockSearchHandler}
      onChangeHandler={() => {}}/>));

    navBar.find('input').simulate('keyPress', {key: 'Enter'});
    expect(mockSearchHandler.mock.calls.length).toEqual(1);
  });
});