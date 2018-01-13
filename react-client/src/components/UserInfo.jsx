import React from 'react';
import { Panel, Image } from 'react-bootstrap';

const UserInfo = function(props) {
	return (
		<Panel>
			<Panel.Body>
			  <Image className="userinfo-banner" src={props.userinfo[0].banner_img_url} thumbnail />
			  <div className="userinfo-userfields">
				  <a href="#" className="userinfo-username">@{props.userinfo[0].username}</a>
				  <a href="#" className="userinfo-display-name">{props.userinfo[0].display_name}</a>
				</div>
			  
			</Panel.Body>
			<Panel.Footer>Panel footer</Panel.Footer>
		</Panel>
	)
};

export default UserInfo;

/*		<div className="userinfo">
			<h1>THIS IS THE USER INFO COMPONENT OMG</h1>
			<span>User Banner</span>
			<span>User Pic</span>
			<span>Display Name</span>
			<span>Username</span>
			<span>Squeaks</span>
			<span>Following</span>
			<span>Followers</span>
		</div>*/