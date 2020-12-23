import React from 'react'
import { useHistory } from 'react-router-dom';
import './blogItem.scss'

const BlogItem = (props) => {

    const history = useHistory();
    const { id, image, title, name, date, body } = props;

    const waktu = new Date().toUTCString("en-US", date);

    return (
        <div className="blog-item" onClick={() => history.push(`/detail-blog/${id}`)}>
            <img className="img-thumb" src={image} alt="post" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {waktu}</p>
                <p className="body">{body.substring(0, 100)} ... <span className="read-more">read more</span></p>
            </div>
        </div>
    )
}

export default BlogItem
