import React from 'react';
import { Link } from 'react-router';

const Links = (props) => {
  return (
    <div>
      <div>
        <Link to='/'>Back to homepage</Link>
      </div>
      <div>
        <Link to='/links/nested'>To Nested Links Page</Link>
      </div>
      { props.children }
    </div>
  )
}

export default Links;
