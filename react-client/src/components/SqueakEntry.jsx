import React from 'react';
import { Media, Image } from 'react-bootstrap';
import moment from 'moment';

const SqueakEntry = ({squeak}) => (
  <Media className="squeak-entry">
    <Media.Right>
      <Image width={64} height={64} src={squeak.profile_img_url} alt="rounded" rounded/>
    </Media.Right>
    <Media.Body>
      <Media.Heading>@{squeak.username}</Media.Heading>
      <p className="squeak-name-time">
        {squeak.display_name} &#183; {moment(squeak.created_at).fromNow()}
      </p>
      <p>
        {squeak.text}
      </p>
    </Media.Body>
  </Media>
);

export default SqueakEntry;

/*
  <div class="squeak-entry">
    <div>
      <span>{squeak.username}</span>
    </div>
    <div>
      <span>{squeak.displayName}</span>
    </div>
    <div>
      <span>{squeak.text}</span>
    </div>
  </div>

  <Media>
    <Media.Right>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
    </Media.Right>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <Media>
        <Media.Right>
          <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
        </Media.Right>
        <Media.Body>
          <Media.Heading>Nested Media Heading</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </Media.Body>
  </Media>
  <Media>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
    <Media.Right>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
    </Media.Right>
  </Media>
  <Media>
    <Media.Right>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
    </Media.Right>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
    <Media.Right>
      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
    </Media.Right>
  </Media>
*/