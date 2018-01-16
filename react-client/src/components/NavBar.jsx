import React from 'react';
import { Navbar, FormGroup, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ shouldReplace, inputValue, searchHandler, onChangeHandler, userinfo }) => {
  return (
    <Navbar fixedTop>
      <Link to="/" className="navbar-left" replace={shouldReplace}>
        <Image src="pretty_logo.jpg" className="nav-logo" circle />
      </Link>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" replace={shouldReplace}>
            Squeaker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className="navbar-right">
        <Navbar.Form>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search for user.."
              value={inputValue} 
              onChange={onChangeHandler}
              onKeyPress={e => {
                if (e.key === 'Enter') return searchHandler();
              }}/>
          </FormGroup>
          <Button type="submit" onClick={searchHandler}>Go</Button>
        </Navbar.Form>
        <Link to={`/${userinfo.username}`} className="navbar-right" replace={shouldReplace}>
          <Image src={userinfo.profile_img_url} className="nav-logo" circle />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
