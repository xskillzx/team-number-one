import React from 'react';
import FollowCarousel from '../components/Carousel.jsx';
import { Panel, Image } from 'react-bootstrap';

const WhoToFollow = function(props) {
	return (
		<Panel className="whotofollow-panel">
			<Panel.Heading className="whotofollow-header">
				<Panel.Title componentClass="h3">
					Who To Follow
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body className="whotofollow-body">
			    <FollowCarousel />
			</Panel.Body>
		</Panel>
	)
};

export default WhoToFollow;