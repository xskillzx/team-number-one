import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import $ from 'jquery';

class FollowCarousel extends React.Component {
	constructor(props) {
		super(props);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null,
			topFollowed: undefined
		};
	}


  componentDidMount() {
    this.getTopFollowed();
  }

  getTopFollowed() {
    let settings = {
      url: '/api/topfollowed',
      method: 'GET',
      contentType: 'application/json'
    }
    $.ajax(settings).done(data => {
      this.setState({ topFollowed: data });
    });
  }

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}

	render() {

	  // Handle case where the response is not here yet
	  if ( !this.state.topFollowed ) {
	     // Note that you can return false it you want nothing to be put in the dom
	     // This is also your chance to render a spinner or something...
	     return <div>The responsive it not here yet!</div>
	  }

	  // Gives you the opportunity to handle the case where the ajax request
	  // completed but the result array is empty
	  if ( this.state.topFollowed.length === 0 ) {
	      return <div>No result found for this subscription</div>;
	  } 

    // Normal case         
		return (
			<Carousel
				activeIndex={this.state.index}
				direction={this.state.direction}
				onSelect={this.handleSelect}
				className="carousel-pics"
			>
			{ this.state.topFollowed.map(user => {
				  return (
						<Carousel.Item key={user.id}>
						  <div className="carousel-pics-container">
								<Image className="carousel-pics" src={user.profile_img_url} />
							</div>
							<Carousel.Caption>
								<h4>@{user.username}</h4>
								<p>{user.bio_text}</p>
							</Carousel.Caption>
						</Carousel.Item>
				  )
			  })
			}
			</Carousel>
		)
	}
}

export default FollowCarousel;