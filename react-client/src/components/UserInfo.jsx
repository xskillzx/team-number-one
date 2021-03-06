import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserInfo = function(props) {
	return (
		<Panel className="userinfo-panel">
			<Panel.Body className="userinfo-body">
			  <Image className="userinfo-banner" src={props.userinfo[0].banner_img_url} thumbnail />
			  <div className="userinfo-userfields">
				  <a href="#" className="userinfo-username">@{props.userinfo[0].username}</a>
					<div>
			      <a href="#" className="userinfo-display-name">{props.userinfo[0].display_name}</a>
					</div>
					<p className="userinfo-bio-text">{props.userinfo[0].bio_text}</p>
				</div>
			</Panel.Body>
			<Panel.Footer className="userinfo-footer">
			  <div className="userinfo-stats">
			    <span className="userinfo-statlabel">Squeaks</span>
			    <span className="userinfo-statlabel">Following</span>
			    <span className="userinfo-statlabel">Followers</span>
			    <div>
				    <span className="userinfo-statvalue">
				      <Link to={'/' + props.userinfo[0].username} className="userinfo-statvalue-link">{props.counts ? props.counts.squeakCount : undefined}</Link>
				    </span>
				    <span className="userinfo-statvalue">
				      <Link to={'/' + props.userinfo[0].username} className="userinfo-statvalue-link">{props.counts ? props.counts.following : undefined}</Link>
				    </span>
				    <span className="userinfo-statvalue">
				      <Link to={'/' + props.userinfo[0].username} className="userinfo-statvalue-link">{props.counts ? props.counts.followers : undefined}</Link>
				    </span>
				  </div>
			  </div>
			</Panel.Footer>
		</Panel>
	)
};

export default UserInfo;