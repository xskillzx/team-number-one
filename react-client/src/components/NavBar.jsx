import React from 'react';
import { Navbar, FormGroup, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ shouldReplace, inputValue, searchHandler, onChangeHandler, userpic }) => {
  return (
    <Navbar fixedTop>
      <a href="#" className="navbar-left"><Image src="./pretty_logo.jpg" className="nav-logo" circle /></a>
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
        <a href="#" className="navbar-right"><Image src={userpic} className="nav-logo" circle /></a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
