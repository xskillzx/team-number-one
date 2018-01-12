import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Feed from '../src/components/Feed.jsx';

describe('Test Feed', () => {
  it('Feed should render squeak entries if squeaks are sent', () => {
    let mockSqueaks =[{id: 1, text:'some text', username: 'username', displayName: 'First Last'}];
    let component = renderer.create(
      <Feed squeaks={mockSqueaks}/>
    );
    let tree = component.toJSON();
    expect(tree.children[0].props.class).toEqual('squeak-entry');
  });

  it('Feed should have as much childs as the squeaks that are sent', () => {
    let mockSqueaks =[{id: 1, text:'some text', username: 'username', displayName: 'First Last'}, {id: 2, text:'some text2', username: 'username2', displayName: 'First Last2'}];
    let component = renderer.create(
      <Feed squeaks={mockSqueaks}/>
    );
    let tree = component.toJSON();
    expect(tree.children.length).toEqual(mockSqueaks.length);
  });

  // TODO: remove x once UserEntry is implemented and being rendered inside Feed
  xit('Feed should render user entries if users are sent', () => {
    let mockUsers =[{id: 1, bio_text:'some text', username: 'username', display_name: 'First Last'}];
    let component = renderer.create(
      <Feed users={mockUsers}/>
    );
    let tree = component.toJSON();
    expect(tree.children[0].props.class).toEqual('user-entry');
  });

  it('Feed should have as much childs as the users that are sent', () => {
    let mockUsers =[{id: 1, bio_ext:'some text', username: 'username', displayName: 'First Last'}, {id: 2, bio_text:'some text2', username: 'username2', displayName: 'First Last2'}];
    let component = renderer.create(
      <Feed users={mockUsers}/>
    );
    let tree = component.toJSON();
    expect(tree.children.length).toEqual(mockUsers.length);
  });
});