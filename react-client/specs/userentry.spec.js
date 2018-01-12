import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import UserEntry from '../src/components/UserEntry.jsx';

describe('Test UserEntry', () => {
  it('UserEntry should have an Image component inside', () => {
    let mockUser = {id: 1, username: 'mockymock', display_name: 'First Last', profile_img_url: 'https://i.pinimg.com/736x/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864--facebook-profile-profile-pictures.jpg', bio_text: 'Some bio text.'}
    const component = renderer.create(<UserEntry {...mockUser}/>);
    let tree = component.toJSON();

    expect(tree.children[0].children[0].children[0].type).toBe('img');
  });

  it('UserEntry should have a Button component inside', () => {
    let mockUser = {id: 1, username: 'mockymock', display_name: 'First Last', profile_img_url: 'https://i.pinimg.com/736x/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864--facebook-profile-profile-pictures.jpg', bio_text: 'Some bio text.'}
    const component = renderer.create(<UserEntry {...mockUser}/>);
    let tree = component.toJSON();

    expect(tree.children[0].children[1].children[2].type).toBe('button');
  });

  it('UserEntry should have a p component inside with the bio_text', () => {
    let mockUser = {id: 1, username: 'mockymock', display_name: 'First Last', profile_img_url: 'https://i.pinimg.com/736x/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864--facebook-profile-profile-pictures.jpg', bio_text: 'Some bio text.'}
    const component = renderer.create(<UserEntry {...mockUser}/>);
    let tree = component.toJSON();

    expect(tree.children[0].children[1].children[1].children[0]).toBe(mockUser.bio_text);
  });

  it('UserEntry should have a h6 component inside with the username', () => {
    let mockUser = {id: 1, username: 'mockymock', display_name: 'First Last', profile_img_url: 'https://i.pinimg.com/736x/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864--facebook-profile-profile-pictures.jpg', bio_text: 'Some bio text.'}
    const component = renderer.create(<UserEntry {...mockUser}/>);
    let tree = component.toJSON();

    let username = tree.children[0].children[1].children[0].children[0] + tree.children[0].children[1].children[0].children[1];
    expect(username).toBe('@' + mockUser.username);
  });
});