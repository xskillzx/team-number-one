import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import SearchPage from '../src/containers/SearchPage.jsx';

describe('Test SearchPage', () => {
  it('SearchPage should call componentDidMount()', () => {
    spy(SearchPage.prototype, 'componentDidMount');

    let mockLocation = {search: '?q=somesearchquery'};
    const wrapper = mount(<SearchPage {...mockLocation}/>);

    expect(SearchPage.prototype.componentDidMount.calledOnce).toBe(true);
  });

  it('SearchPage should have to divs inside', () => {
    let mockLocation = {search: '?q=somesearchquery'};
    const component = renderer.create(<SearchPage {...mockLocation}/>);
    let tree = component.toJSON();

    expect(tree.children[0].type).toBe('div');
    expect(tree.children[1].type).toBe('div');
  });
});