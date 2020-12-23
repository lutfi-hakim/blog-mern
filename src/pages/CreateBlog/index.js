import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
import './createBlog.scss';

const CreateBlog = () => {

    const history = useHistory();

    return (
        <div className="blog-post">
            <Link title="Cancel" onClick={() => history.push('/')} />
            <p className="title">New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={16} />
            <div className="button-action">
                <Button title="Save" />
            </div>
            <Gap height={40} />
        </div >
    )
}

export default CreateBlog
