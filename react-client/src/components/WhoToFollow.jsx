import React from 'react';
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
			  <div className="whotofollow-people">
			    <Carousel>
			    </Carousel>
				</div>
			</Panel.Body>
		</Panel>
	)
};

export default WhoToFollow;

/*	<Carousel>
		<Carousel.Item>
			<img width={900} height={500} alt="900x500" src="/carousel.png" />
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img width={900} height={500} alt="900x500" src="/carousel.png" />
			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img width={900} height={500} alt="900x500" src="/carousel.png" />
			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>*/