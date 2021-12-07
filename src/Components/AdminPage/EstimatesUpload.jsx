import React, { useState } from "react";
import axios from "axios";
import { PublishRounded } from "@material-ui/icons";
import { Button } from "@material-ui/core";
function EstimatesUpload({ history }) {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file1", file1.file);
    data.append("file2", file2.file);
    data.append("file3", file3?.file);
    data.append("file4", file4?.file);
    axios
      .post("/api/estimates_upload", data, {
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
        <label className="form_label">
          베이직
          <PublishRounded />
          <input
            type="file"
            name="file1"
            accept=".doc,.docx"
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
          베이직플러스
          <PublishRounded />
          <input
            type="file"
            accept=".doc,.docx"
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
        <label className="form_label">
          프리미엄
          <PublishRounded />
          <input
            type="file"
            accept=".doc,.docx"
            required
            onChange={(e) =>
              setFile3({
                file: e.target.files[0],
              })
            }
          />
          <p>{file3?.file?.name}</p>
        </label>
        <label className="form_label">
          프리미엄플러스
          <PublishRounded />
          <input
            type="file"
            accept=".doc,.docx"
            required
            onChange={(e) =>
              setFile4({
                file: e.target.files[0],
              })
            }
          />
          <p>{file4?.file?.name}</p>
        </label>
        <Button variant="outlined" color="primary" type="submit">
          저장
        </Button>
      </form>
    </div>
  );
}

export default EstimatesUpload;
