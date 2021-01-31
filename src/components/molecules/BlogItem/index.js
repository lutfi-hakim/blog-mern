import React from "react";
import { useHistory } from "react-router-dom";
import "./blogItem.scss";
import { starIcon } from "../../../assets/index";
import { Button } from "../../atoms";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, name, date, body, _id } = props;

  const waktu = new Date().toUTCString("en-US", date);

  return (
    <div className="blog-item">
      <img className="img-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name} - {waktu}
        </p>
        <p className="body">{body.substring(0, 100)} ... </p>
        <div className="title-wrapper">
          <div className="view-wrapper">
            <p className="view">
              <strong>200</strong> view
            </p>{" "}
            <p className="rate-wrapper">
              <img src={starIcon} alt="star" /> 4.5
            </p>
          </div>
          <div className="action-wrapper">
            <p
              className="edit"
              onClick={() => history.push(`/create-blog/${_id}`)}
            >
              Edit
            </p>{" "}
            | <p className="delete">Delete</p>
          </div>
        </div>
        <Button
          title="Details"
          onClick={() => history.push(`/detail-blog/${_id}`)}
        />
      </div>
    </div>
  );
};

export default BlogItem;
