import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerBg } from '../../assets'
import { Gap, Link } from '../../components/atoms'
import './detailBlog.scss'

const DetailBlog = () => {

    const history = useHistory();

    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={registerBg} alt="thumb" />
            <p className="blog-title">title blog</p>
            <p className="blog-author">author-date post</p>
            <p className="blog-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Link title="< Back to Home" onClick={() => history.push('/')} />
            <Gap height={40} />
        </div>
    )
}

export default DetailBlog
