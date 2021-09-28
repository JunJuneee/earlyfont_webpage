import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { PublishRounded } from "@material-ui/icons";

function AdminEdit({ history, match }) {
  const [title, setTitle] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");

  useEffect(() => {
    axios.post("/api/loadFontData", { id: match.params.id }).then((res) => {
      setTitle(res.data.font.title);
      setFile1(res.data.font.thumnail);
      setFile2(res.data.font.detail_image);
      setFile3(
        `${res.data.font.font_file ? `${res.data.font.title}.zip` : ""}`
      );
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", match.params.id);
    data.append("title", title);
    data.append("file1", file1.file);
    data.append("file2", file2.file);
    data.append("file3", file3.file);
    axios
      .post("/api/edit", data, {
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        alert(res.data.success);
        history.push("/admin");
      });
  };
  return (
    <div className="adminPage">
      <form className="adminPage_form" onSubmit={onSubmit}>
        <TextField
          label="Title"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form_label">
          썸네일 이미지 파일
          <PublishRounded />
          <input
            type="file"
            accept=".png,.jpg"
            onChange={(e) =>
              setFile1({
                file: e.target.files[0],
              })
            }
          />
          <p>{file1?.file?.name || file1}</p>
        </label>
        <label className="form_label">
          상세이미지 파일
          <PublishRounded />
          <input
            type="file"
            accept=".png,.jpg"
            onChange={(e) =>
              setFile2({
                file: e.target.files[0],
              })
            }
          />
          <p>{file2?.file?.name || file2}</p>
        </label>
        <label className="form_label">
          폰트파일 파일
          <PublishRounded />
          <input
            type="file"
            accept=".zip"
            onChange={(e) =>
              setFile3({
                file: e.target.files[0],
              })
            }
          />
          <p>{file3?.file?.name || file3}</p>
        </label>

        <Button type="submit">저장</Button>
      </form>
    </div>
  );
}

export default AdminEdit;
