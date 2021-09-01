import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./AdminUpload.css";
import { useState } from "react";
import axios from "axios";
import { PublishRounded } from "@material-ui/icons";

function AdminUpload({ history }) {
  const [title, setTitle] = useState("");
  const [description, setdDescription] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  // const [file3, setFile3] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("file1", file1.file);
    data.append("file2", file2.file);
    axios
      .post("/upload", data, {
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        alert(res.data.success);
        history.push("/admin");
      });

    // setTitle("");
    // setdDescription("");
    // setFile1("");
    // setFile2("");
    // setFile3("");
    // return false;
  };

  return (
    <div className="adminPage">
      <form className="adminPage_form" onSubmit={onSubmit}>
        <TextField
          id="standard-basic1"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="standard-basic2"
          label="Descrtip"
          value={description}
          onChange={(e) => setdDescription(e.target.value)}
        />
        <label className="form_label">
          썸네일 이미지 파일
          <PublishRounded />
          <input
            type="file"
            name="file1"
            accept=".png,.jpg"
            required
            onChange={(e) =>
              setFile1({
                file: e.target.files[0],
              })
            }
          />
          <p>{file1?.file?.name}</p>
        </label>
        <label className="form_label">
          상세이미지 파일
          <PublishRounded />
          <input
            type="file"
            accept=".png,.jpg"
            required
            value={file2.value}
            onChange={(e) =>
              setFile2({
                file: e.target.files[0],
              })
            }
          />
          <p>{file2?.file?.name}</p>
        </label>
        {/* <label className="form_label">
          폰트파일 파일
          <PublishRounded />
          <input
            type="file"
            onChange={(e) =>
              setFile3({
                file: e.target.files[0],
              })
            }
          />
          <p>{file3?.file?.name}</p>
        </label> */}
        <Button variant="outlined" color="primary" type="submit">
          저장
        </Button>
      </form>
    </div>
  );
}

export default AdminUpload;
