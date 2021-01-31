import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import {
  postToAPI,
  setForm,
  setImgPreview,
  updateToAPI,
} from "../../config/redux/action";
import axios from "axios";
import "./createBlog.scss";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    console.log("params", props);

    const id = props.match.params.id;

    if (props.match.params.id) {
      setIsUpdate(true);

      axios
        .get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          console.log("res :", data);
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props, dispatch]);

  const onSubmit = () => {
    const id = props.match.params.id;

    if (isUpdate) {
      updateToAPI(form, id);
    } else {
      postToAPI(form);
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];

    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Back to Home" onClick={() => history.push("/")} />
      <p className="title">{isUpdate ? "Update" : "Create New"} Blog Post</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={16} />
      <div className="button-action">
        <Button title={isUpdate ? "Update" : "Simpan"} onClick={onSubmit} />
      </div>
      <Gap height={40} />
    </div>
  );
};

export default withRouter(CreateBlog);
