import '../index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useParams} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Blogs from './Blogs';
import Placeholder from './images/placeholder-blog.png'
import MainNavbar from './MainNavbar';

const BlogPost = (props) => {
    let { blogId } = useParams();
    const blog = Blogs[blogId]
    return (
      <React.Fragment>
        <MainNavbar/>
        <Row className="blog-post">
          <Col xs={8}>
            <h2>{blog.title}</h2>
            <div className="blog-author">
              <p id="name"><strong>{blog.author}</strong></p>
              <p id="date">{blog.postDate}</p>
            </div>
            <img src={Placeholder} class="blog-image"></img>
            <div className="blog-body">
              {blog.body.map(paragraph => (
                <p>{paragraph}</p>
              ))}
            </div>
            <p className="blog-tags"> Tags: <span id="blog-tag">{blog.tags.map(tag => (`${tag}, `))}</span></p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }

export default BlogPost;