import React from 'react';
import { Panel, Image, Carousel } from 'react-bootstrap';

const WhoToFollow = function(props) {
	return (
		<Panel className="whotofollow-panel">
			<Panel.Heading className="whotofollow-header">
				<Panel.Title componentClass="h3">
					Who To Follow
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body className="whotofollow-body">
			    <Carousel>
			      { console.log(props.top) }
			    </Carousel>
			</Panel.Body>
		</Panel>
	)
};

export default WhoToFollow;