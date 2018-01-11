import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ inputValue, searchHandler, onChangeHandler }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Squeaker</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight>
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;