import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import WritePost from '../src/components/WritePost.jsx';

describe('Test WritePost', () => {
  xit('WritePost\'s Post button should call the passed in function', () => {
    let mockWritePostHandler = jest.fn();
    const writepost = shallow(<WritePost
      writePostValue='not important here'
      writePostHandler={mockWritePostHandler}
    />);
    writepost.find({type: 'submit'}).simulate('click');
    expect(mockWritePostHandler.mock.calls.length).toEqual(1);
  });

  xit('When WritePost input changes, it should call passed in changeHandler', () => {
    let mockInputChangeHandler = jest.fn();
    const writepost = shallow(<WritePost
      onPostInputChangeHandler={mockInputChangeHandler}
    />);
    // check if mock function was called when input value changes
    // console.log(writepost.find({type: 'text'}));
    writepost.find({type: 'text'}).simulate('change');
    expect(mockInputChangeHandler.mock.calls.length).toEqual(1);
  });

  xit('When hitting enter in the input, the post handler should be called', () => {
    let mockInputChangeHandler = jest.fn();
    const writepost = shallow(<WritePost
      writePostHandler={mockInputChangeHandler}
    />);

    writepost.find({type: 'text'}).simulate('keyPress', {key: 'Enter'});
    expect(mockInputChangeHandler.mock.calls.length).toEqual(1);
  });
});
