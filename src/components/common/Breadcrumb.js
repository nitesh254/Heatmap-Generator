/* eslint-disable react/prop-types */
import { Breadcrumb as Breadcrumbs } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
  return (
    <Breadcrumbs>
      {props.title && <Breadcrumbs.Item linkAs={Link} linkProps={{ to: `${props.mainlink}` }}>{props.title}</Breadcrumbs.Item>}
      {props.title2 && <Breadcrumbs.Item linkAs={Link} linkProps={{ to: `${props.mainlink2}` }}>{props.title2}</Breadcrumbs.Item>}
      {props.pages ?
        props.pages.map((e, i) => {
          return (
            e.link ?
              <Breadcrumbs.Item key={i} linkAs={Link} linkProps={{ to: '/' + e.link }}>
                {e.title}
              </Breadcrumbs.Item>
              :
              <Breadcrumbs.Item key={i} active>{e.title}</Breadcrumbs.Item>
          )
        })
        : ''}
      {props.active && <Breadcrumbs.Item active>{props.active}</Breadcrumbs.Item>}
    </Breadcrumbs>
  );
}

export default Breadcrumb;
